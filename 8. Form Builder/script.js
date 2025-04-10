const fieldType = document.getElementById("fieldType");
    const labelInput = document.getElementById("labelInput");
    const addFieldBtn = document.getElementById("addFieldBtn");
    const formPreview = document.getElementById("formPreview");

    addFieldBtn.addEventListener("click", () => {
      const type = fieldType.value;
      const label = labelInput.value.trim();

      if (!type || !label) {
        alert("Please select a field type and enter a label.");
        return;
      }

      const fieldWrapper = document.createElement("div");

      const labelElement = document.createElement("label");
      labelElement.textContent = label;

      let inputElement;

      if (type === "text") {
        inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.placeholder = label;
      } else if (type === "checkbox" || type === "radio") {
        inputElement = document.createElement("input");
        inputElement.type = type;
      }

      fieldWrapper.appendChild(inputElement);
      fieldWrapper.appendChild(labelElement);
      formPreview.appendChild(fieldWrapper);

      labelInput.value = "";
      fieldType.value = "";
    });
