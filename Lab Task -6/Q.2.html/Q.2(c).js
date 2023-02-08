const captionText = document.getElementById('caption-text');
const checkAllButton = document.getElementById('check-all-button');
const uncheckAllButton = document.getElementById('uncheck-all-button');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function updateSummary() {
  let numChecked = 0;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      numChecked++;
    }
  });
  captionText.innerHTML = `${numChecked} of ${checkboxes.length} checked`;
  if (numChecked === 0) {
    checkAllButton.disabled = false;
    uncheckAllButton.disabled = true;
  } else {
    uncheckAllButton.disabled = false;
  }
  if (numChecked === checkboxes.length) {
    checkAllButton.disabled = true;
  }
}

checkAllButton.addEventListener('click', function() {
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    checkbox.closest('tr').className = 'checked';
  });
  updateSummary();
});

uncheckAllButton.addEventListener('click', function() {
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
    checkbox.closest('tr').className = '';
  });
  updateSummary();
});

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function(event) {
    checkbox.closest('tr').className = checkbox.checked ? 'checked' : '';
    updateSummary();
  });
});
