using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SetUiText : MonoBehaviour
{
    [SerializeField]
    private Text textField;
    [SerializeField]
    private string fixedText;

    public void onSliderValueChanged(float numericValue)
    {
        textField.text = $"{fixedText}: {numericValue}";
    }
}
