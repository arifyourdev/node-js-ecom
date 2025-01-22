<div class="form-cards" style=" margin: 20px 15px; padding: 20px 20px 0px 20px;">
    <div id="form-container" class="offer-package-details-container">
        <!-- Original Offer Package Details -->
        <div id="offerPackageDetail" class="offer-package-details">
            <div style="margin-bottom: 20px;">
                <h3>Offer Package Details</h3>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label for="cli" class="form-label">CLI<span class="red-star">*</span></label>
                    <input type="text" id="cli" class="form-control" name="another_cli[]" />
                </div>
                <div class="col-md-8">
                    <label for="siteDetail" class="form-label">Site Detail<span class="red-star">*</span></label>
                    <input type="text" id="siteDetail" class="form-control" name="site_address[]" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <label for="packageOffered" class="form-label">Package Offered<span class="red-star">*</span></label>
                    <select id="packageOffered" class="form-select" name="plan_name[]">
                        <option selected disabled>Select</option>
                        @foreach ($allpackages as $packagedata)
                        <option value="{{ $packagedata->package_name }}" data-cost="{{ $packagedata->cost }}" data-vat="{{ $packagedata->vat }}" data-inclvat="{{ $packagedata->incl_vat }}">
                            {{ $packagedata->package_name }}
                        </option>
                        @endforeach
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="packageCost" class="form-label">Cost<span class="red-star">*</span></label>
                    <input type="text" id="packageCost" class="form-control" name="plan_cost[]" />
                </div>
                <div class="col-md-2">
                    <label for="packageVAT" class="form-label">VAT<span class="red-star">*</span></label>
                    <input type="text" id="packageVAT" class="form-control" name="vat[]" />
                </div>
                <div class="col-md-2">
                    <label for="packageIncludingVAT" class="form-label">Including VAT<span class="red-star">*</span></label>
                    <input type="text" id="packageIncludingVAT" class="form-control" name="including_vat[]" />
                </div>
            </div>

            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    const packageSelect = document.getElementById('packageOffered');
                    const costInput = document.getElementById('packageCost');
                    const vatInput = document.getElementById('packageVAT');
                    const inclVATInput = document.getElementById('packageIncludingVAT');

                    packageSelect.addEventListener('change', (e) => {
                        const selectedOption = e.target.selectedOptions[0];

                        // Get data attributes from the selected option
                        const cost = selectedOption.getAttribute('data-cost') || '';
                        const vat = selectedOption.getAttribute('data-vat') || '';
                        const inclVat = selectedOption.getAttribute('data-inclvat') || '';

                        // Populate the input fields
                        costInput.value = cost;
                        vatInput.value = vat;
                        inclVATInput.value = inclVat;
                    });
                });
            </script>

            <!-- Add more rows dynamically (example for Calling Features) -->
            <div class="callingFeaturesContainer">
                <div class="row mt-3">
                    <div class="col-md-6">
                        <label for="callingFeatures" class="form-label">Calling Features</label>
                        <select class="form-select" name="callingFeatures[]">
                            <option selected disabled>Select</option>
                            @foreach ($allcallingfeatures as $callingfeatures)
                            <option value="{{ $callingfeatures->callingfeature_name }}" data-cost="{{ $callingfeatures->cost }}" data-vat="{{ $callingfeatures->vat }}" data-inclvat="{{ $callingfeatures->incl_vat }}">
                                {{ $callingfeatures->callingfeature_name }}
                            </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="callingFeaturesCost" class="form-label">Cost</label>
                        <input type="text" class="form-control" name="callingFeaturesCost[]" />
                    </div>
                    <div class="col-md-2">
                        <label for="callingFeaturesVAT" class="form-label">VAT</label>
                        <input type="text" class="form-control" name="callingFeaturesVAT[]" />
                    </div>
                    <div class="col-md-2">
                        <label for="callingFeaturesIncludingVAT" class="form-label">Including VAT</label>
                        <input type="text" class="form-control" name="callingFeaturesIncludingVAT[]" />
                    </div>
                </div>
                <button class="add-more-btn1 btn-add" type="button"> + </button>
            </div>

        </div>
        <!-- Product Service Charges Section Ends-->

        <div class="row mt-3">
            <div class="col-md-4 form-section">
                <label for="contractDuration" class="form-label">Contract Duration<span class="red-star">*</span></label>
                <select class="form-select" aria-label="Default select example" name="contractProvider" id="contractProvider">
                    <option selected disabled>Select</option>
                    <option value="12 Months">12 Months</option>
                    <option value="24 Months">24 Months</option>
                    <option value="36 Months">36 Months</option>
                    <option value="48 Months">48 Months</option>
                    <option value="60 Months">60 Months</option>
                    <option value="60+">60+</option>
                </select>
            </div>
        </div>
    </div>
</div>
<!-- Add CLI Button -->
<div style="display: flex; justify-content: flex-end; align-items: center; margin: 10px 20px;">
    <button id="add-main-btn" name="add-cli" type="button"
        style="background-color: blueviolet; font-size:18px; color: white; border-radius: 10px; font-weight: 600; text-align: center; padding: 5px 10px;">+ADD
        CLI</button>
</div>

<script>
    document.getElementById('add-main-btn').addEventListener('click', function() {
        const formContainer = document.getElementById('form-container');

        // Create a new container for the Offer Package Details
        const newRow = document.createElement('div');
        newRow.classList.add('offer-package-details-container');
        const newIndex = formContainer.querySelectorAll('.offer-package-details-container').length;
        newRow.innerHTML = `
        <div id="offerPackageDetail" class="offer-package-details" style="margin-top: 20px;">
            <div style="display: flex; justify-content: space-between;">
                <h3>Offer Package Details</h3>
                <button class="close-btn btn btn-danger ">X</button>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label for="cli" class="form-label">CLI</label>
                    <input type="text" id="cli" class="form-control" name="another_cli[]" />
                </div>
                <div class="col-md-8">
                    <label for="siteDetail" class="form-label">Site Detail</label>
                    <input type="text" id="siteDetail" class="form-control" name="site_address[]" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <label for="packageOffered" class="form-label">Package Offered</label>
                    <select id="packageOffered" class="form-select" name="plan_name[]">
                        <option selected>Choose Package</option>
                        <option value="1">One</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="packageCost" class="form-label">Cost</label>
                    <input type="text" id="packageCost" class="form-control" name="plan_cost[]" />
                </div>
                <div class="col-md-2">
                    <label for="packageVAT" class="form-label">VAT</label>
                    <input type="text" id="packageVAT" class="form-control" name="vat[]" />
                </div>
                <div class="col-md-2">
                    <label for="packageIncludingVAT" class="form-label">Including VAT</label>
                    <input type="text" id="packageIncludingVAT" class="form-control" name="including_vat[]" />
                </div>
            </div>
  
            <!-- Add more rows dynamically (example for Calling Features) -->
            <div class="callingFeaturesContainer">
                <div class="row mt-3">
                    <div class="col-md-6">
                        <label for="callingFeatures" class="form-label">Calling Features</label>
                        <select class="form-select" name="callingFeatures[]">
                            <option selected>Choose Feature</option>
                            <option value="1">Feature 1</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="callingFeaturesCost" class="form-label">Cost</label>
                        <input type="text" class="form-control" name="callingFeaturesCost[]" />
                    </div>
                    <div class="col-md-2">
                        <label for="callingFeaturesVAT" class="form-label">VAT</label>
                        <input type="text" class="form-control" name="callingFeaturesVAT[]" />
                    </div>
                    <div class="col-md-2">
                        <label for="callingFeaturesIncludingVAT" class="form-label">Including VAT</label>
                        <input type="text" class="form-control" name="callingFeaturesIncludingVAT[]" />
                    </div>
                </div>
                <button class="add-more-btn1 btn-add" type="button"> + </button>
            </div>

        </div>
    `;

        formContainer.appendChild(newRow);

        // Close button to remove the entire section
        const closeBtn = newRow.querySelector('.close-btn');
        closeBtn.addEventListener('click', function() {
            formContainer.removeChild(newRow);
        });


        // Add dynamic row handling for Calling section
        const addCallingRowBtn = newRow.querySelector('.add-more-btn1');
        const callingFeaturesContainer = newRow.querySelector('.callingFeaturesContainer');

        addCallingRowBtn.addEventListener('click', function() {
            const newCallingRow = document.createElement('div');

            newCallingRow.classList.add('row');
            newCallingRow.innerHTML = `
          <div class="row mt-3">
            <div class="col-md-6">
                <label for="callingFeatures" class="form-label">Calling Features</label>
                <select class="form-select" name="callingFeatures[]">
                    <option selected>Choose Feature</option>
                    <option value="1">Feature 1</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="callingFeaturesCost" class="form-label">Cost</label>
                <input type="text" class="form-control" name="callingFeaturesCost[]" />
            </div>
            <div class="col-md-2">
                <label for="callingFeaturesVAT" class="form-label">VAT</label>
                <input type="text" class="form-control" name="callingFeaturesVAT[]" />
            </div>
            <div class="col-md-2">
                <label for="callingFeaturesIncludingVAT" class="form-label">Including VAT</label>
                <input type="text" class="form-control" name="callingFeaturesIncludingVAT[]" />
            </div>
          </div>
           <div class="col-md-2 my-1">
                <button type="button" class="btn btn-danger remove-btn">Close</button>
            </div>
        `;
            callingFeaturesContainer.insertBefore(newCallingRow, addCallingRowBtn);

            // Attach the remove button functionality for each new row
            const removeBtn = newCallingRow.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                callingFeaturesContainer.removeChild(newCallingRow);
            });
        });
    });
</script>