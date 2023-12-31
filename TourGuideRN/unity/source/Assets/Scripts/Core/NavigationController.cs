using UnityEngine;
using UnityEngine.AI;

public class NavigationController : MonoBehaviour
{
    public Vector3 TargetPosition { get; set; } = Vector3.zero;

    public NavMeshPath CalculatedPath { get; private set; }


    private NavMeshPath path;

    private void Start()
    {
        CalculatedPath = new NavMeshPath();
    }

    // Update is called once per frame
    private void Update()
    {
        if (TargetPosition != Vector3.zero)
        {
            NavMesh.CalculatePath(transform.position, TargetPosition, NavMesh.AllAreas, CalculatedPath);
        }
    }

}
