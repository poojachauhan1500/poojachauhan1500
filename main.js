$(document).ready(function () {
    //  wrapper for unchecked items
    const wrapper = $("<div></div>").addClass("wrapper");
    wrapper.appendTo("body");

     //  wrapper for checked items
     const checkedWrapper = $("<div></div>").addClass("checked-wrapper");
     checkedWrapper.appendTo("body");
  
    $("#myForm").on("submit", function (e) {
      e.preventDefault();
  
      const inputValue = $(".input").val();
      if (inputValue === "") return;
  
      //  checkbox
      const checkBoxItem = $("<input>").attr({
        type: "checkbox",
        class: "checkbox-item"
      });
  
      //  list item
      const listItem = $("<li></li>").addClass("list-item").text(inputValue);
  
      //  delete button
      const deleteBtn = $("<button></button>").addClass("delete-btn").text("Delete");
      deleteBtn.click(function () {
        listItem.remove();
      });
  
      //  edit button
      const editBtn = $("<button></button>").addClass("edit-btn").text("Edit");
      editBtn.click(function () {
        $(".input").val(inputValue); 
        listItem.remove(); 
      });
  
      // Append the checkbox, buttons, and list item to the wrapper
      listItem.prepend(checkBoxItem);
      listItem.append(deleteBtn);
      listItem.append(editBtn);
      wrapper.append(listItem);
  
      // Clear the input box
      $(".input").val("");
    });
  
    //  checkbox click event
    $(document).on("click", ".checkbox-item", function() {
      const listItem = $(this).closest(".list-item");
  
      if ($(this).is(":checked")) {
        checkedWrapper.append(listItem);
      } else {
        wrapper.append(listItem);
      }
    });
  });



  