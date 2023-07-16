using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class TargetHandler : MonoBehaviour
{
    [SerializeField]
    private NavigationController navigationController;
    [SerializeField]
    private TextAsset targetModelData;
    [SerializeField]
    private Dropdown targetDataDropdown;
    [SerializeField]
    private GameObject targetObjectprefab;
    [SerializeField]
    private Transform[] targetObjectParentTransforms;
    [SerializeField]
    private PathArrowVisualisation arrowIndicator;

    [SerializeField]
    private Text instructionsText;

    [SerializeField]
    private QrCodeRecenter qrCodeRecenter;

    private List<TargetFacade> currentTargetItems = new List<TargetFacade>();
    string[] FloorNames = { "Ground", "Mezzanine" };
    private int currentTargetFloor;

    private void Start()
    {
        GenerateTargetItems();
        FillDropdownWithTargetItems();
    }

    private void GenerateTargetItems()
    {
        IEnumerable<Target> targets = GenerateTargetDataFromSource();
        foreach (Target target in targets)
        {
            currentTargetItems.Add(CreateTargetFacade(target));
        }
    }

    private IEnumerable<Target> GenerateTargetDataFromSource()
    {
        return JsonUtility.FromJson<TargetWrapper>(targetModelData.text).TargetList;
    }

    private TargetFacade CreateTargetFacade(Target target)
    {
        GameObject targetObject = Instantiate(targetObjectprefab, targetObjectParentTransforms[target.FloorNumber], false);
        targetObject.SetActive(true);
        targetObject.name = $"{target.FloorNumber} - {target.Name}";
        targetObject.transform.localPosition = target.Position;
        targetObject.transform.localRotation = Quaternion.Euler(target.Rotation);

        TargetFacade targetData = targetObject.GetComponent<TargetFacade>();
        targetData.Name = target.Name;
        targetData.FloorNumber = target.FloorNumber;

        return targetData;
    }

    private void FillDropdownWithTargetItems()
    {
        List<Dropdown.OptionData> targetFacadeOptionsData =
            currentTargetItems.Select(x => new Dropdown.OptionData
            {
                text = $"{FloorNames[x.FloorNumber]} - {x.Name}"
            }).ToList();

        targetDataDropdown.ClearOptions();
        targetDataDropdown.AddOptions(targetFacadeOptionsData);
    }

    public void SetSelectedTargetPositionWithDropdown(int selectedVenue)
    {
        setArrowActive(true);
        int venueIndex = selectedVenue;
        currentTargetFloor = qrCodeRecenter.GetCurrentTargetFloor();
        if (currentTargetItems[selectedVenue].FloorNumber < currentTargetFloor)
        {
            setArrowActive(false);
            qrCodeRecenter.SetVenueOptionsActive(false);
            instructionsText.gameObject.SetActive(true);
            instructionsText.text = $"Go to {FloorNames[currentTargetItems[selectedVenue].FloorNumber]} floor and rescan";
            venueIndex = 10;
        }
        else if (currentTargetItems[selectedVenue].FloorNumber > currentTargetFloor)
        {
            setArrowActive(false);
            qrCodeRecenter.SetVenueOptionsActive(false);
            instructionsText.gameObject.SetActive(true);
            instructionsText.text = $"Go to {FloorNames[currentTargetItems[selectedVenue].FloorNumber]} floor and rescan";
            venueIndex = 10;
        }

        qrCodeRecenter.SetVenueOptionsActive(false);
        navigationController.TargetPosition = GetCurrentlySelectedTarget(venueIndex);
    }

    private Vector3 GetCurrentlySelectedTarget(int selectedVenue)
    {
        if (selectedVenue >= currentTargetItems.Count)
        {
            return Vector3.zero;
        }

        return currentTargetItems[selectedVenue].transform.position;
    }

    public TargetFacade GetCurrentTargetByTargetText(string targetText)
    {
        return currentTargetItems.Find(x => x.Name.ToLower().Equals(targetText.ToLower()));
    }

    public void setArrowActive(bool arrowActive)
    {
        arrowIndicator.gameObject.SetActive(arrowActive);
    }
}
