using System.Collections;
using System.Collections.Generic;
using Unity.Collections;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using ZXing;
using System.Linq;
using UnityEngine.UI;

public class QrCodeRecenter : MonoBehaviour
{

    [SerializeField]
    private ARSession session;
    [SerializeField]
    private ARSessionOrigin sessionOrigin;
    [SerializeField]
    private ARCameraManager cameraManager;
    [SerializeField]
    private TargetHandler targetHandler;

    [SerializeField]
    private Text instructionsText;
    private int TargetFloor;


    [SerializeField]
    private GameObject VenueOptionsPanel;
    [SerializeField]
    private GameObject ScanQrPanel;
 
    private Texture2D cameraImageTexture;
    private IBarcodeReader reader = new BarcodeReader();

    // Update is called once per frame
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            SetQrCodeRecenterTarget("Starbucks");
        }
    }

    private void OnEnable()
    {
        cameraManager.frameReceived += OnCameraFrameReceived;
    }

    private void OnDisable()
    {
        cameraManager.frameReceived -= OnCameraFrameReceived;
    }

    private void OnCameraFrameReceived(ARCameraFrameEventArgs eventArgs)
    {
        if (!cameraManager.TryAcquireLatestCpuImage(out XRCpuImage image))
            return;

        var conversionParams = new XRCpuImage.ConversionParams
        {
            // Get the entire image.
            inputRect = new RectInt(0, 0, image.width, image.height),

            // Downsample by 2.
            outputDimensions = new Vector2Int(image.width / 2, image.height / 2),

            // Choose RGBA format.
            outputFormat = TextureFormat.RGBA32,

            // Flip across the vertical axis (mirror image).
            transformation = XRCpuImage.Transformation.MirrorY
        };

        // See how many bytes you need to store the final image.
        int size = image.GetConvertedDataSize(conversionParams);

        // Allocate a buffer to store the image.
        var buffer = new NativeArray<byte>(size, Allocator.Temp);

        // Extract the image data
        image.Convert(conversionParams, buffer);

        // The image was converted to RGBA32 format and written into the provided buffer
        // so you can dispose of the XRCpuImage. You must do this or it will leak resources.
        image.Dispose();

        // At this point, you can process the image, pass it to a computer vision algorithm, etc.
        // In this example, you apply it to a texture to visualize it.

        // You've got the data; let's put it into a texture so you can visualize it.
        cameraImageTexture = new Texture2D(
            conversionParams.outputDimensions.x,
            conversionParams.outputDimensions.y,
            conversionParams.outputFormat,
            false);

        cameraImageTexture.LoadRawTextureData(buffer);
        cameraImageTexture.Apply();

        // Done with your temporary data, so you can dispose it.
        buffer.Dispose();

        // Detect and decode the barcode inside the bitmap
        var result = reader.Decode(cameraImageTexture.GetPixels32(), cameraImageTexture.width, cameraImageTexture.height);

        if (result != null)
        {
            SetQrCodeRecenterTarget(result.Text);
        }
    }

    private void SetQrCodeRecenterTarget(string targetText)
    {
        TargetFacade currentTarget = targetHandler.GetCurrentTargetByTargetText(targetText);
        TargetFloor = currentTarget.FloorNumber;

        if (currentTarget != null)
        {
            //SetActiveFloors(targetText);
            targetHandler.setArrowActive(false);
            ScanQrPanel.SetActive(false);
            SetVenueOptionsActive(true);
            instructionsText.gameObject.SetActive(false);
            // Reset position and rotation of ARSession
            session.Reset();
            // Add offset for recentering 
            sessionOrigin.transform.position = currentTarget.transform.position;
            sessionOrigin.transform.rotation = currentTarget.transform.rotation;
        }
    }

    public int GetCurrentTargetFloor()
    {
        return TargetFloor ;
    }

    public void SetVenueOptionsActive(bool panelOptionsActive)
    {
        VenueOptionsPanel.SetActive(panelOptionsActive);
    }

    //private void SetActiveFloors(string targetText)
    //{
    //    navigationTargetDropdown.ClearOptions();
    //    string[] groundFloor = { "Entrance", "Makerspace", "Fresco", "Library" };
    //    string[] mezzanineFloor = { "MezzanineLibrary", "Starbucks" };

    //    if (groundFloor.Contains(targetText)) {
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Select Venue"));
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Entrance"));
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Makerspace"));
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Fresco"));
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Library"));
    //    } else if (mezzanineFloor.Contains(targetText))
    //    {
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Select Venue"));
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("MezzanineLibrary"));
    //        navigationTargetDropdown.options.Add(new Dropdown.OptionData("Starbucks"));
    //    }
    //}

    //public void ChangeActiveFloor(string floorEntrance)
    //{
    //    SetQrCodeRecenterTarget(floorEntrance);
    //}
}
