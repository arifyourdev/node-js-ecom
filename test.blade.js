@if (session() -> has('username'))
  < !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <meta name="csrf-token" content="{{ csrf_token() }}">
                            <title>Create Sale</title>
                            <!-- Fonts -->
                            <link rel="preconnect" href="https://fonts.googleapis.com">
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
                                        <!-- core:css -->
                                        <link rel="stylesheet" href="{{ asset('public/vendors/core/core.css') }}">
                                            <link rel="stylesheet" href="{{ asset('public/vendors/flatpickr/flatpickr.min.css') }}">
                                                <link rel="stylesheet" href="{{ asset('public/fonts/feather-font/css/iconfont.css') }}">
                                                    <link rel="stylesheet" href="{{ asset('public/vendors/flag-icon-css/css/flag-icon.min.css') }}">
                                                        <link rel="stylesheet" href="{{ asset('public/css/style.css?v=0.02') }}">
                                                            <!-- End layout styles -->
                                                            <link rel="shortcut icon" href="{{ asset('public/images/logo/fav-icon.png') }}" />

                                                        </head>
                                                        <style>
                                                            .btn-add {
                                                                background - color: blueviolet;
                                                            color: white;
                                                            width: 30px;
                                                            height: 30px;
                                                            display: flex;
                                                            align-items: center;
                                                            justify-content: center;
                                                            border-radius: 5px;
                                                            margin-top: 7px;
                                                            border: none;
      }

                                                            .btn-add:hover {
                                                                cursor: pointer;
      }

                                                            .form-section {
                                                                margin - bottom: 1rem;
      }

                                                            .btn-remove:hover {
                                                                background - color: darkred;
      }

                                                            .remove-btn {
                                                                position: absolute;
                                                            right: 0;
                                                            font-size: 13px;
                                                            padding: 4px 10px;
                                                            margin: 6px auto;
      }

                                                            #add-main-btn {
                                                                background - color: blueviolet;
                                                            font-size: 14px;
                                                            color: #fff;
                                                            border-radius: 5px;
                                                            font-weight: 600;
                                                            text-align: center;
                                                            padding: 5px 10px;
                                                            border: none;
      }

                                                            .remove-card-btn {
                                                                display: none;
                                                            background-color: #d92b57;
                                                            color: #fff;
                                                            border: none;
                                                            padding: 5px 10px;
                                                            border-radius: 5px;
                                                            position: absolute;
                                                            right: 0;
      }

                                                            .submit-btn {
                                                                width: 100%;
                                                            padding: 4px 0px;
                                                            color: white;
                                                            background-color: #3A02FF;
                                                            border-radius: 7px;
                                                            cursor: pointer;
      }

                                                            .font-13 {
                                                                font - size: 13px;
      }
                                                        </style>

                                                        <body class="sales-body-color">

                                                            <div class="main-wrapper">

                                                                <!-- partial:partials/_sidebar.html -->
                                                                @extends('layouts.side_bar')

                                                                <div class="page-wrapper">

                                                                    <!-- partial:partials/_navbar.html -->
                                                                    @include('layouts.navbar')
                                                                    <!-- Nav-Bar End -->

                                                                    <!-- Main Content Start -->
                                                                    <div class="page-content">
                                                                        <div class="container-fluid">
                                                                            <div class="row">
                                                                                <div class="col-md-12">
                                                                                    <div class="pb-5">
                                                                                        <label for="saleType" class="form-label fs-4 fw-bold">Select Sale Type</label>
                                                                                        <select name="saleType" id="saleType" class="form-select" onchange="viewMainForm()">
                                      @if (session()->has('followupData') && session('followupData'))
                                      @if (session('followupData')->Business_Name !== null)
                                                                                            <option value="Business" selected>Business</option>
                                                                                            <option value="Consumer">Consumer</option>
                                                                                            @else
                                                                                            <option value="Business">Business</option>
                                                                                            <option value="Consumer" selected>Consumer</option>
                                                                                            @endif
                                                                                            @else
                                                                                            <option value="" disabled selected>Sale Type</option>
                                                                                            <option value="Business">Business</option>
                                                                                            <option value="Consumer">Consumer</option>
                                                                                            @endif
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <style>
                                                                            .red-star {
                                                                                color: red;
                                                                            padding: 2px;
                      }
                                                                        </style>
                                                                        <!-- Main Content End -->
                                                                        <div style="display: none" id="main-form" class="containers" style="border: 1px solid black; background-color: #73C9FF1F;">
                                                                            <div class="main-content" style="padding: 10px">
                                                                                <form action="{{ route('create-sale') }}" method="POST" id="myForm">
                                                                                    @csrf
                                                                                    <!--Form Box-->
                                                                                    <div class="form-box" style="background-color: #CEEBFF;padding: 10px; margin: 15px;border-radius: 15px;">
                                                                                        <!--Business Details-->
                                                                                        <div class="form-cards" style=" margin: 20px 15px; padding: 20px; " style="display: none" id="business-section">
                                                                                            <div style="margin-bottom: 20px;">
                                                                                                <h3>Business Details</h3>
                                                                                            </div>
                                                                                            <div class="row g-2 g-lg-3">
                                                                                                <div class="col-md-8">
                                                                                                    <label for="inputPassword5" class="form-label">Company Name <span class="red-star">*</span></label>
                                                                                                    <input type="text" class="form-control" aria-describedby="passwordHelpBlock" name="businessname" id="companyName" />
                                                                                                </div>
                                                                                                <div class=" col-md-4">
                                                                                                    <label for="inputPassword5" class="form-label">Company Reg. No.</label>
                                                                                                    <input type="text" class="form-control" aria-describedby="passwordHelpBlock" name="comp_reg_no" id="companyRegNo" />
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="row g-2 g-lg-3 my-1">
                                                                                                <div class="col-md-3">
                                                                                                    <label for="inputPassword5" class="form-label">Company Type <span class="red-star">*</span></label>
                                                                                                    <select class="form-select" aria-label="Default select example" name="businesstype">
                                                                                                        <option selected disabled>Select</option>
                                                                                                        <option value="Sole Trader">Sole Trader</option>
                                                                                                        <option value="Partnership">Partnership</option>
                                                                                                        <option value="Limited Company">Limited Company</option>
                                                                                                        <option value="Others">Others</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                                <div class=" col-md-3">
                                                                                                    <label for="inputPassword5" class="form-label">Company Category</label>
                                                                                                    <select class="form-select" aria-label="Default select example" name="businesscategory">
                                                                                                        <option selected disabled>Select</option>
                                                                                                        <option value="Bakery">Bakery</option>
                                                                                                        <option value="Electricians">Electricians</option>
                                                                                                        <option value="Builders">Builders</option>
                                                                                                        <option value="Dentists">Dentists</option>
                                                                                                        <option value="Taxi Servie">Taxi Servie</option>
                                                                                                        <option value="Cafe">Cafe</option>
                                                                                                        <option value="Plumbing & Heating">Plumbing & Heating</option>
                                                                                                        <option value="Restaurant">Restaurant</option>
                                                                                                        <option value="Doors and Widnows">Doors and Widnows</option>
                                                                                                        <option value="Plumbing and Heating">Plumbing and Heating</option>
                                                                                                        <option value="Repair Service">Repair Service</option>
                                                                                                        <option value="Travellers">Travellers</option>
                                                                                                        <option value="Holiday Accommodation and Parks">Holiday Accommodation and Parks</option>
                                                                                                        <option value="Event Management">Event Management</option>
                                                                                                        <option value="English Restaurants">English Restaurants</option>
                                                                                                        <option value="Cafes and Coffee Shops">Cafes and Coffee Shops
                                                                                                        </option>
                                                                                                        <option value="Locksmiths">Locksmiths</option>
                                                                                                        <option value="Self Catering Holiday Accommodation">Self Catering
                                                                                                            Holiday Accommodation</option>
                                                                                                        <option value="Taxis and Private Hire Vehicles">Taxis and Private
                                                                                                            Hire
                                                                                                            Vehicles</option>
                                                                                                        <option value="Florists">Florists</option>
                                                                                                        <option value="Chauffeur Services">Chauffeur Services</option>
                                                                                                        <option value="Bakeries">Bakeries</option>
                                                                                                        <option value="Chauffeur Driven Car Hire">Chauffeur Driven Car Hire
                                                                                                        </option>
                                                                                                        <option value="Granite Suppliers">Granite Suppliers</option>
                                                                                                        <option value="Travel Agents & Services">Travel Agents & Services
                                                                                                        </option>
                                                                                                        <option value="Headstones">Headstones</option>
                                                                                                        <option value="Plumbers">Plumbers</option>
                                                                                                        <option value="Commercial Flooring">Commercial Flooring</option>
                                                                                                        <option value="Kitchen Tiling">Kitchen Tiling</option>
                                                                                                        <option value="Tilers">Tilers</option>
                                                                                                        <option value="Coffee Machines and Supplies">Coffee Machines and
                                                                                                            Supplies</option>
                                                                                                        <option value="Monumental Masons and Memorials">Monumental Masons
                                                                                                            and
                                                                                                            Memorials</option>
                                                                                                        <option value="Italian Restaurants">Italian Restaurants</option>
                                                                                                        <option value="Fireplaces">Fireplaces</option>
                                                                                                        <option value="Indian Restaurants">Indian Restaurants</option>
                                                                                                        <option value="Pub Restaurants">Pub Restaurants</option>
                                                                                                        <option value="Floor Sanding and Polishing">Floor Sanding and
                                                                                                            Polishing
                                                                                                        </option>
                                                                                                        <option value="Fish and Chip Shops and Restaurants">Fish and Chip
                                                                                                            Shops
                                                                                                            and Restaurants</option>
                                                                                                        <option value="Airport Transfers">Airport Transfers</option>
                                                                                                        <option value="Painters and Decorators">Painters and Decorators
                                                                                                        </option>
                                                                                                        <option value="Tile Suppliers">Tile Suppliers</option>
                                                                                                        <option value="Steakhouse Restaurants">Steakhouse Restaurants
                                                                                                        </option>
                                                                                                        <option value="Welders">Welders</option>
                                                                                                        <option value="Party & Event Planning">Party & Event Planning
                                                                                                        </option>
                                                                                                        <option value="Flooring Services">Flooring Services</option>
                                                                                                        <option value="MiniBus Hire">MiniBus Hire</option>
                                                                                                        <option value="Chinese Restaurants">Chinese Restaurants</option>
                                                                                                        <option value="Nepalese Restaurants">Nepalese Restaurants</option>
                                                                                                        <option value="Coach Hire">Coach Hire</option>
                                                                                                        <option value="Carpet Shops">Carpet Shops</option>
                                                                                                        <option value="Gas Fires">Gas Fires</option>
                                                                                                        <option value="Caribbean Restaurants">Caribbean Restaurants
                                                                                                        </option>
                                                                                                        <option value="Thai Restaurants">Thai Restaurants</option>
                                                                                                        <option value="Handyman Services">Handyman Services</option>
                                                                                                        <option value="Landscapers">Landscapers</option>
                                                                                                        <option value="Pizza Delivery and Takeaway">Pizza Delivery and
                                                                                                            Takeaway
                                                                                                        </option>
                                                                                                        <option value="Fishing Lake">Fishing Lake</option>
                                                                                                        <option value="DJs">DJs</option>
                                                                                                        <option value="Pubs">Pubs</option>
                                                                                                        <option value="Dentures">Dentures</option>
                                                                                                        <option value="Bathroom Design and Installation">Bathroom Design
                                                                                                            and
                                                                                                            Installation</option>
                                                                                                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                                                                                                        <option value="Granite Worktops">Granite Worktops</option>
                                                                                                        <option value="Coach Holidays">Coach Holidays</option>
                                                                                                        <option value="Holiday Cottages">Holiday Cottages</option>
                                                                                                        <option value="Laminate Floor Fitters">Laminate Floor Fitters
                                                                                                        </option>
                                                                                                        <option value="Caravan Parks">Caravan Parks</option>
                                                                                                        <option value="Hotels">Hotels</option>
                                                                                                        <option value="Static Caravan Parks">Static Caravan Parks</option>
                                                                                                        <option value="Mini Buses">Mini Buses</option>
                                                                                                        <option value="Patio Cleaning">Patio Cleaning</option>
                                                                                                        <option value="Hotel Restaurants">Hotel Restaurants</option>
                                                                                                        <option value="Tea and Coffee Specialist Shops">Tea and Coffee
                                                                                                            Specialist Shops</option>
                                                                                                        <option value="Partitioning Services and Equipment">Partitioning
                                                                                                            Services and Equipment</option>
                                                                                                        <option value="Greek Restaurants">Greek Restaurants</option>
                                                                                                        <option value="Tapas Restaurants">Tapas Restaurants</option>
                                                                                                        <option value="Soft Drink Suppliers">Soft Drink Suppliers</option>
                                                                                                        <option value="Tours and Sightseeing">Tours and Sightseeing
                                                                                                        </option>
                                                                                                        <option value="Traditional Restaurants">Traditional Restaurants
                                                                                                        </option>
                                                                                                        <option value="Video to DVD Transfer">Video to DVD Transfer
                                                                                                        </option>
                                                                                                        <option value="Paving and Driveways">Paving and Driveways</option>
                                                                                                        <option value="Takeaway Food">Takeaway Food</option>
                                                                                                        <option value="Function Rooms and Banqueting">Function Rooms and
                                                                                                            Banqueting</option>
                                                                                                        <option value="Carpet and Upholstery Cleaners">Carpet and
                                                                                                            Upholstery
                                                                                                            Cleaners</option>
                                                                                                        <option value="Underfloor Heating">Underfloor Heating</option>
                                                                                                        <option value="Marble Services">Marble Services</option>
                                                                                                        <option value="Tourist Attractions">Tourist Attractions</option>
                                                                                                        <option value="Antique Restoration">Antique Restoration</option>
                                                                                                        <option value="Chinese Takeaways">Chinese Takeaways</option>
                                                                                                        <option value="Pizzerias">Pizzerias</option>
                                                                                                        <option value="Mediterranean Restaurants">Mediterranean Restaurants
                                                                                                        </option>
                                                                                                        <option value="Orthodontists">Orthodontists</option>
                                                                                                        <option value="Wedding Flowers">Wedding Flowers</option>
                                                                                                        <option value="Worktops">Worktops</option>
                                                                                                        <option value="Party Venues">Party Venues</option>
                                                                                                        <option value="Camp Sites">Camp Sites</option>
                                                                                                        <option value="Wedding Cakes">Wedding Cakes</option>
                                                                                                        <option value="Quarries">Quarries</option>
                                                                                                        <option value="Seafood Restaurants">Seafood Restaurants</option>
                                                                                                        <option value="Other">Other</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                                <div class=" col-md-6">
                                                                                                    <label for="inputPassword5" class="form-label">Website</label>
                                                                                                    <input type="text" class="form-control" name="businesswebsite" id="businesswebsite" />
                                                                                                    <span class="text-danger font-13" id="businessWebsiteErr"></span>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                                                <div class="col-md-3">
                                                                                                    <label for="inputPassword5" class="form-label">Address Line 1 <span class="red-star">*</span></label>
                                                                                                    <input type="text" class="form-control" name="business_address1" id="addressLine" />
                                                                                                </div>
                                                                                                <div class=" col-md-3">
                                                                                                    <label for="inputPassword5" class="form-label">Address Line 2</label>
                                                                                                    <input type="text" class="form-control" name="business_address2" />
                                                                                                </div>
                                                                                                <div class=" col-md-2">
                                                                                                    <label for="inputPassword5" class="form-label">City <span class="red-star">*</span></label>
                                                                                                    <input type="text" class="form-control" name="businesscity" id="city" />
                                                                                                </div>
                                                                                                <div class=" col-md-2">
                                                                                                    <label for="inputPassword5" class="form-label">State</label>
                                                                                                    <input type="text" class="form-control" name="business_state" />
                                                                                                </div>
                                                                                                <div class=" col-md-2">
                                                                                                    <label for="inputPassword5" class="form-label">Postal Code <span class="red-star">*</span></label>
                                                                                                    <input type="text" class="form-control" name="businesspostcode" id="postcode" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <!--AUTHORISED-->
                                                                                        <!-- The parent container where new sections will be added -->
                                                                                        <div>
                                                                                            <div id="auth-persons-container">
                                                                                                <!-- Existing Authorized Person Form Section (Hidden initially) -->
                                                                                                <div class="form-cards" style="margin: 0px 15px; margin-top: 20px; padding: 20px;" id="auth-person-container">
                                                                                                    <div style="margin-bottom: 20px;">
                                                                                                        <h3>Authorized Person Details</h3>
                                                                                                    </div>
                                                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                                                                                        <div class="col-md-2">
                                                                                                            <label for="inputPassword5" class="form-label">Title <span class="red-star">*</span></label>
                                                                                                            <select class="form-select" aria-label="Default select example" name="authtitle[]" id="auth_title">
                                                                                                                <option selected disabled>Select</option>
                                                                                                                <option value="Mr">Mr.</option>
                                                                                                                <option value="Mrs">Mrs.</option>
                                                                                                                <option value="Ms">Ms.</option>
                                                                                                                <option value="Dr">Dr.</option>
                                                                                                                <option value="Prof">Prof.</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                        <div class=" col-md-4">
                                                                                                            <label for="inputPassword5" class="form-label">First Name <span class="red-star">*</span></label>
                                                                                                            <input type="text" class="form-control" name="authfirstname[]" id="authfirstname" />
                                                                                                        </div>
                                                                                                        <div class="col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Middle Name</label>
                                                                                                            <input type="text" class="form-control" name="authmiddlename[]" />
                                                                                                        </div>
                                                                                                        <div class=" col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Last name <span class="red-star">*</span></label>
                                                                                                            <input type="text" class="form-control" name="authlastname[]" id="authlastname" />
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                                                        <div class="col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Date Of Birth</label>
                                                                                                            <input type="date" class="form-control" name="authdob[]" />
                                                                                                        </div>
                                                                                                        <div class=" col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Gender</label>
                                                                                                            <select class="form-select" aria-label="Default select example" name="authgender[]">
                                                                                                                <option selected disabled>Select</option>
                                                                                                                <option value="Male">Male</option>
                                                                                                                <option value="Female">Female</option>
                                                                                                                <option value="Other">Other</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                                                        <div class="col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Address Line 1 <span class="red-star">*</span></label>
                                                                                                            <input type="text" class="form-control" name="authaddress1[]" id="authaddress1" />
                                                                                                        </div>
                                                                                                        <div class=" col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Address Line 2</label>
                                                                                                            <input type="text" class="form-control" name="authaddress2[]" />
                                                                                                        </div>
                                                                                                        <div class=" col-md-2">
                                                                                                            <label for="inputPassword5" class="form-label">City <span class="red-star">*</span></label>
                                                                                                            <input type="text" class="form-control" name="authcity[]" id="auth_city" />
                                                                                                        </div>
                                                                                                        <div class=" col-md-2">
                                                                                                            <label for="inputPassword5" class="form-label">State</label>
                                                                                                            <input type="text" class="form-control" name="authstate[]" />
                                                                                                        </div>
                                                                                                        <div class=" col-md-2">
                                                                                                            <label for="inputPassword5" class="form-label">Postal Code <span class="red-star">*</span></label>
                                                                                                            <input type="text" class="form-control" name="authpostcode[]" id="auth_postcode" />
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                                                        <div class="col-md-3">
                                                                                                            <label for="authprimary_phone" class="form-label">Primary Phone</label>
                                                                                                            <input type="tel" name="authprimary_phone[]" id="authprimary_phone" class="form-control" minlength="9" maxlength="10">
                                                                                                                <span class="text-danger font-13" id="businessPhoneErr"></span>
                                                                                                        </div>
                                                                                                        <div class=" col-md-3">
                                                                                                            <label for="authsecondary_phone" class="form-label">Secondary Phone</label>
                                                                                                            <input type="text" class="form-control" name="authsecondary_phone[]" id="authsecondary_phone" minlength="9" maxlength="10" />
                                                                                                            <span class="text-danger font-13" id="secondaryPhoneErr"></span>
                                                                                                        </div>
                                                                                                        <div class=" col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Primary Mobile</label>
                                                                                                            <input type="text" class="form-control" name="authprimary_mobile[]" id="authprimary_mobile" />
                                                                                                            <span class="text-danger font-13" id="primaryMobileErr"></span>
                                                                                                        </div>
                                                                                                        <div class=" col-md-3">
                                                                                                            <label for="inputPassword5" class="form-label">Secondary Mobile</label>
                                                                                                            <input type="text" class="form-control" name="authsecondary_mobile[]" id="authsecondary_mobile" />
                                                                                                            <span class="text-danger font-13" id="secondaryMobileErr"></span>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                                                        <div class="col-md-6">
                                                                                                            <label for="authprimaryemail" class="form-label">Primary Email</label>
                                                                                                            <input type="email" class="form-control" name="authprimaryemail[]" id="authprimaryemail" />
                                                                                                            <span class="text-danger" id="businessEmailErr"></span>
                                                                                                        </div>
                                                                                                        <div class=" col-md-6">
                                                                                                            <label for="authsecondryemail" class="form-label">Secondary Email</label>
                                                                                                            <input type="email" class="form-control" name="authsecondryemail[]" id="authsecondryemail" />
                                                                                                            <span class="text-danger" id="secondaryEmailErr"></span>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                            <div style="display: flex; align-items: center; justify-content: start; text-align: center; margin-left: 30px; margin-bottom: 20px;">
                                                                                                <button class="add-more-btn1 btn-add" name="add-authorised" type="button"> + </button>
                                                                                            </div>
                                                                                        </div>

                                                                                        <!--Current Service Details-->
                                                                                        <div class="form-cards" style=" margin: 0px 15px; padding: 20px; ">
                                                                                            <div style="margin-bottom: 20px;">
                                                                                                <h3>Current Service Details</h3>
                                                                                            </div>
                                                                                            <div class="row">
                                                                                                <div class="col-md-5">
                                                                                                    <label for="inputPassword5" class="form-label">Current Provider Name</label>
                                                                                                    <select class="form-select" aria-label="Default select example" name="current_provider">
                                                                                                        <option selected disabled>Select</option>
                                                                                                        <option value="BT">BT</option>
                                                                                                        <option value="Talk Talk">Talk Talk</option>
                                                                                                        <option value="i-Talk">i-Talk</option>
                                                                                                        <option value="Octopus">Octopus</option>
                                                                                                        <option value="Shell Energy">Shell Energy</option>
                                                                                                        <option value="Vodafone">Vodafone</option>
                                                                                                        <option value="Post Office">Post Office</option>
                                                                                                        <option value="Imperial Telecom">Imperial Telecom</option>
                                                                                                        <option value="EON">EON</option>
                                                                                                        <option value="OVO">OVO</option>
                                                                                                        <option value="Origin">Origin</option>
                                                                                                        <option value="Expert Telecom">Expert Telecom</option>
                                                                                                        <option value="Transparent Telecom">Transparent Telecom</option>
                                                                                                        <option value="Plusnet">Plusnet</option>
                                                                                                        <option value="EE">EE</option>
                                                                                                        <option value="Direct Save">Direct Save</option>
                                                                                                        <option value="Utility Warehouse">Utility Warehouse</option>
                                                                                                        <option value="OneStream">OneStream</option>
                                                                                                        <option value="Money Saver">Money Saver</option>
                                                                                                        <option value="Virgin Media">Virgin Media</option>
                                                                                                        <option value="Sky">Sky</option>
                                                                                                        <option value="V4">V4</option>
                                                                                                        <option value="Inspire Telecom">Inspire Telecom</option>
                                                                                                        <option value="Daisy">Daisy</option>
                                                                                                        <option value="One Bill">One Bill</option>
                                                                                                        <option value="XLN">XLN</option>
                                                                                                        <option value="Clear Business">Clear Business</option>
                                                                                                        <option value="Southern Electric">Southern Electric</option>
                                                                                                        <option value="Unicom">Unicom</option>
                                                                                                        <option value="Microtalk">Microtalk</option>

                                                                                                    </select>
                                                                                                </div>
                                                                                                <div class=" col-md-5">
                                                                                                    <label class="form-label">Current Services</label>
                                                                                                    <input type="text" class="form-control" name="currentservice" id="current_services">
                                                                                                </div>
                                                                                                <div class="col-md-2">
                                                                                                    <label class="form-label">Current Bill Per Month</label>
                                                                                                    <input type="text" class="form-control" name="currentcost" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div class="form-cards" style=" margin: 20px 15px; padding: 20px 20px 0px 20px;">
                                                                                            <div id="form-container" class="offer-package-details-container relative">
                                                                                                <!-- Original Offer Package Details -->
                                                                                                <div id="offerPackageDetail" class="offer-package-details" style="position: relative;">
                                                                                                    <button type="button" class="remove-card-btn">
                                                                                                        X
                                                                                                    </button>
                                                                                                    <div style="margin-bottom: 20px;">
                                                                                                        <h3>Offer Package Details</h3>
                                                                                                    </div>
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-4">
                                                                                                            <label for="cli" class="form-label">CLI<span class="red-star">*</span></label>
                                                                                                            <input type="text" id="cli" class="form-control" name="another_cli[]" />
                                                                                                            <span class="text-danger font-13" id="cliErr"></span>
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
                                                                                                                <option value="{{ $packagedata->package_name }}" data-phone="{{$packagedata->line_rental}}" data-package="{{ $packagedata->package_name}}" data-downloadspeed="{{ $packagedata->download_speed}}" data-uploadspeed="{{ $packagedata->upload_speed }}" data-cost="{{ $packagedata->cost }}" data-vat="{{ $packagedata->vat }}" data-inclvat="{{ $packagedata->incl_vat }}">
                                                                                                                    {{ $packagedata-> package_name}}
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

                                                                                                    <!-- Add more rows dynamically (example for Calling Features) -->
                                                                                                    <div class="callingFeaturesContainer">
                                                                                                        <div class="row mt-3">
                                                                                                            <div class="col-md-6">
                                                                                                                <label for="callingFeatures" class="form-label">Calling Features</label>
                                                                                                                <select class="form-select" name="callingFeatures[]" id="callingFeatures">
                                                                                                                    <option selected disabled>Select</option>
                                                                                                                    @foreach ($allcallingfeatures as $callingfeatures)
                                                                                                                    <option value="{{ $callingfeatures->callingfeature_name }}" data-cost="{{ $callingfeatures->cost }}" data-vat="{{ $callingfeatures->vat }}" data-inclvat="{{ $callingfeatures->incl_vat }}">
                                                                                                                        {{ $callingfeatures-> callingfeature_name}}
                                                                                                                    </option>
                                                                                                                    @endforeach
                                                                                                                </select>
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="callingFeaturesCost" class="form-label">Cost</label>
                                                                                                                <input type="text" class="form-control" id="CallpackageCost" name="callingFeaturesCost[]" />
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="callingFeaturesVAT" class="form-label">VAT</label>
                                                                                                                <input type="text" class="form-control" id="CallpackageVAT" name="callingFeaturesVAT[]" />
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="callingFeaturesIncludingVAT" class="form-label">Including VAT</label>
                                                                                                                <input type="text" class="form-control" id="CallpackageIncludingVAT" name="callingFeaturesIncludingVAT[]" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <button class="add-more-btn1 btn-add" type="button"> + </button>
                                                                                                    </div>

                                                                                                    <!-- Add Ons Section -->
                                                                                                    <div class="addOnsContainer">
                                                                                                        <div class="row mt-3">
                                                                                                            <div class="col-md-6">
                                                                                                                <label for="addOns" class="form-label">Add Ons</label>
                                                                                                                <select id="addOns" class="form-select" name="add_ons[]">
                                                                                                                    <option selected disabled>Select</option>
                                                                                                                    @foreach ($alladdons as $addon)
                                                                                                                    <option value="{{ $addon->addon_name }}" data-cost="{{ $addon->cost }}" data-vat="{{ $addon->vat }}" data-inclvat="{{ $addon->incl_vat }}">
                                                                                                                        {{ $addon-> addon_name}}
                                                                                                                    </option>
                                                                                                                    @endforeach
                                                                                                                </select>
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="addOnsCost" class="form-label">Cost</label>
                                                                                                                <input type="text" id="addOnsCost" class="form-control" name="addonscost[]" />
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="addOnsVAT" class="form-label">VAT</label>
                                                                                                                <input type="text" id="addOnsVAT" class="form-control" name="addonsvat[]" />
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="addOnsIncludingVAT" class="form-label">Including VAT</label>
                                                                                                                <input type="text" id="addOnsIncludingVAT" class="form-control" name="addonsincludingvat[]" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <button class="add-more-btn2 btn-add" type="button"> + </button>
                                                                                                    </div>

                                                                                                    <!-- Product Service Charges Section -->
                                                                                                    <div class="oneOffContainer" id="oneOffContainer">
                                                                                                        <div style="margin-top: 20px;">
                                                                                                            <h3>One Off Charges</h3>
                                                                                                        </div>
                                                                                                        <div class="row mt-2">
                                                                                                            <div class="col-md-6">
                                                                                                                <label for="productService" class="form-label">Hardware</label>
                                                                                                                <select id="productService" class="form-select" name="product_services[]">
                                                                                                                    <option selected disabled>Select</option>
                                                                                                                    @foreach ($allhardwares as $hardware)
                                                                                                                    <option value="{{ $hardware->hardware_name }}" data-cost="{{ $hardware->cost }}" data-vat="{{ $hardware->vat }}" data-inclvat="{{ $hardware->incl_vat }}">
                                                                                                                        {{ $hardware-> hardware_name}}
                                                                                                                    </option>
                                                                                                                    @endforeach
                                                                                                                </select>
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="productServiceCost" class="form-label">Cost</label>
                                                                                                                <input type="text" id="productServiceCost" class="form-control" name="productservicecost[]" />
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="productServiceVAT" class="form-label">VAT</label>
                                                                                                                <input type="text" id="productServiceVAT" class="form-control" name="productservicevat[]" />
                                                                                                            </div>
                                                                                                            <div class="col-md-2">
                                                                                                                <label for="productServiceIncludingVAT" class="form-label">Including VAT</label>
                                                                                                                <input type="text" id="productServiceIncludingVAT" class="form-control" name="productserviceincludingvat[]" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <button class="add-more-btn3 btn-add" type="button"> + </button>
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
                                                                                            <button id="add-main-btn" name="add-cli" type="button">+ Add</button>
                                                                                        </div>
                                                                                    </div>

                                                                                    <!--Package Summery-->
                                                                                    <div class="payment-summery-top" style="background-color: #85CCFF; padding: 15px; padding-bottom: 40px; margin: 15px; border-radius: 15px;">
                                                                                        <h2 style="text-align: center; margin: 15px 0; font-weight: 600;">Package Summery</h2>
                                                                                        <div style="margin-bottom: 20px;">
                                                                                            <div style="display: flex; justify-content: space-between; background-color: white; border-radius: 10px; padding: 20px 90px;">
                                                                                                <div class="left-content" style="display: flex; align-items: center;">
                                                                                                    <h2 id="packageName" style="font-size: 24px;">xxxx xxxxx xxxxxx</h2>
                                                                                                </div>

                                                                                                <div class="right-content" style="display: flex; flex-direction: column; gap: 10px;">
                                                                                                    <div style="display: flex; gap: 10px; text-align: right; justify-content: flex-end;" id="phoneLineCont">
                                                                                                        <span style="font-size: 20px; font-weight: 600;" id="phoneLine">Phone Line</span>
                                                                                                        <img src="{{ asset('public/icon_img/telephone.png') }}" alt="Telephone" width="30px">
                                                                                                    </div>

                                                                                                    <div style="display: flex; gap: 10px; text-align: right; justify-content: flex-end; align-items: center;">
                                                                                                        <div style="display:flex; gap: 5px; text-align: right; justify-content: flex-end; align-items: center;">
                                                                                                            <img src="{{ asset('public/icon_img/top.png') }}" alt="Uploadspeed" width="30px">
                                                                                                                <div style="display: flex; flex-direction: column; text-align: left; line-height: 1;">
                                                                                                                    <span style="font-size: 12px;">Upto</span>
                                                                                                                    <span id="uploadSpeed" style="font-size: 20px; font-weight: 600;"></span>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div style="display:flex; gap: 5px; text-align: right; justify-content: flex-end; align-items: center;">
                                                                                                            <img src="{{ asset('public/icon_img/down.png') }}" alt="Downloadspeed" width="30px">
                                                                                                                <div style="display: flex; flex-direction: column; text-align: left; line-height: 1;">
                                                                                                                    <span style="font-size: 12px;">Upto</span>
                                                                                                                    <span id="downloadSpeed" style="font-size: 20px; font-weight: 600;"></span>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div>
                                                                                                            <div>
                                                                                                                <img src="{{ asset('public/icon_img/internet.png') }}" alt="Internet" width="30px">
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div style="display: flex; gap: 10px; text-align: right; justify-content: flex-end;">
                                                                                                        <span style="font-size: 20px; font-weight: 600;">Free Performance Router</span>
                                                                                                        <img src="{{ asset('public/icon_img/router.png') }}" alt="Router" width="30px">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <!-- Payment Summary -->
                                                                                        <div class="payment-summery-body" style="background-color: white; padding: 15px; border-radius: 15px;">
                                                                                            <div style="display: flex; justify-content: space-around; font-size: 22px;">
                                                                                                <h4 style="width: 33.3%; padding-left: 80px; padding-top: 10px;">Service</h4>
                                                                                                <h4 style="width: 33.3%; text-align: right; padding-right: 30px; padding-top: 10px;">One-Off</h4>
                                                                                                <h4 style="width: 33.3%; text-align: right; padding-right: 75px; padding-top: 10px;">Monthly</h4>
                                                                                            </div>
                                                                                            <hr style="margin: 10px;">

                                                                                                <div style="display: flex; justify-content: space-around; padding: 0px 25px;">
                                                                                                    <div style="display: flex; flex-direction: column; text-align: left; font-size: 20px; line-height: 1.8;">
                                                                                                        <span>Connectivity</span>
                                                                                                        <span>Add-Ons</span>
                                                                                                        <span>Calling Features</span>
                                                                                                        <span>Router & Delivery Charges</span>
                                                                                                    </div>
                                                                                                    <div style="display: flex; flex-direction: column; text-align: right; font-size: 20px; line-height: 1.8;">
                                                                                                        <span>-</span>
                                                                                                        <span>-</span>
                                                                                                        <span>-</span>
                                                                                                        <span>Router & Delivery Charges</span>
                                                                                                    </div>
                                                                                                    <div style="display: flex; flex-direction: column; text-align: right; font-size: 20px; line-height: 1.8; width: 20%;">
                                                                                                        <span id="cost">£19.99</span>
                                                                                                        <span id="addOns">£10.00</span>
                                                                                                        <span id="calling">£3.00</span>
                                                                                                        <span>-</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <hr style="margin: 10px;">
                                                                                                    <div style="display: flex; justify-content: space-around;">
                                                                                                        <div style="display: flex; flex-direction: column; padding-top: 10px; padding-left: 75px; width: 33.3%;">
                                                                                                            <h4 style="font-size: 30px;">Total</h4>
                                                                                                        </div>
                                                                                                        <div style="display: flex; flex-direction: column; text-align: right; padding-right: 30px; width: 33.3%;">
                                                                                                            <h4 id="total" style="font-size: 30px;">£10.00</h4>
                                                                                                            <div style="line-height: 0; text-align: right;">
                                                                                                                <h4 style="font-size: 30px;">£10.00</h4>
                                                                                                                <span style="font-size: 12px; font-weight: bold;">Inc VAT</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div style="display: flex; flex-direction: column; text-align: right; padding-right: 75px; width: 33.3%;">
                                                                                                            <h4 style="font-size: 30px;">£32.99</h4>
                                                                                                            <div style="line-height: 0; text-align: right;">
                                                                                                                <h4 style="font-size: 30px;">£10.00</h4>
                                                                                                                <span style="font-size: 12px; font-weight: bold;">Inc VAT</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div>

                                                                                        <div class="container">
                                                                                            <div class="form-cards" style=" margin: 20px 15px; padding: 20px; ">
                                                                                                <h3>Payment Details</h3>
                                                                                                <div class="row mt-3">
                                                                                                    <div class="col-md-5">
                                                                                                        <label class="form-label">Payment Frequency<span class="red-star">*</span></label>
                                                                                                        <select class="form-select" aria-label="Default select example" name="payment_frequency" id="paymentFrequency">
                                                                                                            <option selected disabled>Select</option>
                                                                                                            <option value="Monthly">Monthly</option>
                                                                                                            <option value="Quarterly">Quarterly</option>
                                                                                                            <option value="Annually">Annually</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div class=" col-md-5">
                                                                                                        <label class="form-label">Payment Mode<span class="red-star">*</span></label>
                                                                                                        <select class="form-select" aria-label="Default select example" id="paymentMode" name="mode_of_payment">
                                                                                                            <option selected disabled>Select</option>
                                                                                                            <option value="Credit Card">Credit Card</option>
                                                                                                            <option value="Direct Debit">Direct Debit</option>
                                                                                                            <option value="Cheque">Cheque</option>
                                                                                                            <option value="Cash">Cash</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div class="col-md-2" style="display: none;" id="openMandatory">
                                                                                                        <div style="margin: 38px auto 0;">
                                                                                                            <label class="form-label" style="font-size: 14px;">Send DD Mandate</label>
                                                                                                            <input type="checkbox" id="ddMandatory" style="margin: 0 7px;">
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="row mt-3" id="creditCard" style="display:none">
                                                                                                    <div class=" col-md-4">
                                                                                                        <label class="form-label" id="beneficialLabel">Card Number:<span class="red-star">*</span></label>
                                                                                                        <input name="card_number" type="text" class="form-control" id="beneficiaryName" />
                                                                                                    </div>
                                                                                                    <div class="col-md-3">
                                                                                                        <label class="form-label" id="bankLabel">Card Type:<span class="red-star">*</span></label>
                                                                                                        <select id="bankName" name="card_type" class="form-control">
                                                                                                            <option value="">Select Card Type</option>
                                                                                                            <option value="Visa">Visa</option>
                                                                                                            <option value="MasterCard">MasterCard</option>
                                                                                                            <option value="American Express">American Express</option>
                                                                                                            <option value="Discover">Discover</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div class="col-md-3">
                                                                                                        <label class="form-label" id="acnoLabel">Expiry Date<span class="red-star">*</span></label>
                                                                                                        <input name="expiry_date" type="date" class="form-control" id="expire_date" />
                                                                                                    </div>
                                                                                                    <div class="col-md-2">
                                                                                                        <label class="form-label" id="sortcodeLabel">CVV:<span class="red-star">*</span></label>
                                                                                                        <input name="cvv" type="text" class="form-control" id="CVV" />
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="row mt-3" id="directDebit" style="display:none">
                                                                                                    <div class=" col-md-4">
                                                                                                        <label class="form-label" id="beneficialLabel">Name in the Bank:<span class="red-star Commanstar">*</span></label>
                                                                                                        <input name="name_in_bank" type="text" class="form-control" id="beneficiaryName" required />
                                                                                                    </div>
                                                                                                    <div class=" col-md-2">
                                                                                                        <label class="form-label" id="bankLabel">Bank Name<span class="red-star Commanstar">*</span></label>
                                                                                                        <input name="bank_name" type="text" class="form-control" id="bankName" required />
                                                                                                    </div>
                                                                                                    <div class=" col-md-4">
                                                                                                        <label class="form-label" id="acnoLabel">Ac. No.<span class="red-star Commanstar">*</span></label>
                                                                                                        <input name="account_number" type="text" class="form-control" id="acNo" required />
                                                                                                    </div>
                                                                                                    <div class="col-md-2">
                                                                                                        <label class="form-label" id="sortcodeLabel">Sort Code<span class="red-star Commanstar">*</span></label>
                                                                                                        <input name="sort_code" type="text" class="form-control" id="sortCode" required />
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="row mt-3">
                                                                                                    <div class="col-md-3">
                                                                                                        <label class="form-label">Agent Name<span class="red-star">*</span></label>
                                                                                                        <input name="agent_name" type="text" class="form-control" id="agentName" value="{{ session('username') }}" readonly />
                                                                                                    </div>
                                                                                                    <div class=" col-md-3">
                                                                                                        <label class="form-label">Verifying Officer Name<span class="red-star">*</span></label>
                                                                                                        <select name="verifying_officer_name" class="form-select" id="verifyingOfficer" aria-label="Default select example">
                                                                                                            <option selected disabled>Select</option>
                                                                                                            <option value="1">One</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div class=" col-md-2">
                                                                                                        <label class="form-label">Call Type<span class="red-star">*</span></label>
                                                                                                        <select name="call_type" class="form-select" id="callType" aria-label="Default select example">
                                                                                                            <option selected disabled>Select</option>
                                                                                                            <option value="Auto Dialer">Auto Dialer</option>
                                                                                                            <option value="Manually Dialed">Manually Dialed</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div class=" col-md-2">
                                                                                                        <label class="form-label">Lead Source<span class="red-star">*</span></label>
                                                                                                        <select name="lead_source" class="form-select" id="leadSource" aria-label="Default select example">
                                                                                                            <option selected disabled>Select</option>
                                                                                                            <option value="Auto Dialer">Auto Dialer</option>
                                                                                                            <option value="Manually Dialed">Manually Dialed</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div class=" col-md-2">
                                                                                                        <label class="form-label">Order Type</label>
                                                                                                        <select name="order_type" class="form-select" aria-label="Default select example">
                                                                                                            <option selected disabled>Select</option>
                                                                                                            <option value="Fresh Sale">Fresh Sale</option>
                                                                                                            <option value="Reprocessed Sale">Reprocessed Sale</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="row mt-3">
                                                                                                    <div style="width: 100%;">
                                                                                                        <label for="inputPassword5" class="form-label">Agent Comments<span class="red-star">*</span></label>
                                                                                                        <textarea name="agent_comments" rows="4" style="width: 100%;" id="agentComments"></textarea>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="row mt-3">
                                                                                                    <div style="width: 100%;">
                                                                                                        <button type="submit" class="submit-btn" id="submitBtn">SUBMIT</button>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="row mt-3">
                                                                                                    <div class="col-md-6">
                                                                                                        <button
                                                                                                            style="width: 100%; padding: 4px 0px; border-radius: 7px; outline: none;  color: white; background-color: #6B6B6B; cursor: pointer;">RESET</button>
                                                                                                    </div>
                                                                                                    <div class="col-md-6">
                                                                                                        <button
                                                                                                            style="width: 100%; padding: 4px 0px; border-radius: 7px; outline: none; color: white; background-color: #FF0202; cursor: pointer;">CANCEL</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <!-- core:js -->
                                                            <script src="{{ asset('public/js/select-sale-type.js') }}"></script>
                                                            <script src="{{ asset('public/js/salesFormValidation.js') }}"></script>
                                                            <script src="{{ asset('public/vendors/core/core.js') }}"></script>
                                                            <script src="{{ asset('public/vendors/flatpickr/flatpickr.min.js') }}"></script>
                                                            <script src="{{ asset('public/vendors/apexcharts/apexcharts.min.js') }}"></script>
                                                            <script src="{{ asset('public/vendors/feather-icons/feather.min.js') }}"></script>
                                                            <script src="{{ asset('public/js/template.js') }}"></script>
                                                            <script src="{{ asset('public/js/dashboard-light.js') }}"></script>
                                                            <script src="{{ asset('public/js/salesFormFunction.js') }}"></script>

                                                            <script>
          // Add click event listener to the "Add More" button
                                                                document.querySelector('.btn-add').addEventListener('click', function() {
              // Get the parent container where new sections will be added
              const container = document.getElementById('auth-persons-container');

                                                                // Create a new form section (HTML structure)
                                                                const newFormSection = `
                                                                <div class="form-cards" style="margin: 0px 15px; margin-top: 20px; padding: 20px;">
                                                                    <div style="display: flex; justify-content: space-between;">
                                                                        <h3>Authorised Person Details</h3>
                                                                        <button class="close-btn btn btn-danger">X</button>
                                                                    </div>
                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                                                        <div class="col-md-2">
                                                                            <label for="inputPassword5" class="form-label">Title</label>
                                                                            <select class="form-select" aria-label="Default select example" name="authtitle[]">
                                                                                <option selected disabled>Select</option>
                                                                                <option value="Mr">Mr.</option>
                                                                                <option value="Mrs">Mrs.</option>
                                                                                <option value="Ms">Ms.</option>
                                                                                <option value="Dr">Dr.</option>
                                                                                <option value="Prof">Prof.</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <label for="inputPassword5" class="form-label">First Name</label>
                                                                            <input type="text" class="form-control" name="authfirstname[]" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Middle Name</label>
                                                                            <input type="text" class="form-control" name="authmiddlename[]" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Last Name</label>
                                                                            <input type="text" class="form-control" name="authlastname[]" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Date Of Birth</label>
                                                                            <input type="date" class="form-control" name="authdob[]" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Gender</label>
                                                                            <select class="form-select" name="authgender[]">
                                                                                <option selected disabled>Select</option>
                                                                                <option value="Male">Male</option>
                                                                                <option value="Female">Female</option>
                                                                                <option value="Other">Other</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Address Line 1</label>
                                                                            <input type="text" class="form-control" name="authaddress1[]" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Address Line 2</label>
                                                                            <input type="text" class="form-control" name="authaddress2[]" />
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <label for="inputPassword5" class="form-label">City</label>
                                                                            <input type="text" class="form-control" name="authcity[]" />
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <label for="inputPassword5" class="form-label">State</label>
                                                                            <input type="text" class="form-control" name="authstate[]" />
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <label for="inputPassword5" class="form-label">Postal Code</label>
                                                                            <input type="text" class="form-control" name="authpostcode[]" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                        <div class="col-md-3">
                                                                            <label for="authprimary_phone" class="form-label">Primary Phone</label>
                                                                            <input type="tel" name="authprimary_phone[]" id="authPrimary_phone" class="form-control" />
                                                                            <span class="text-danger font-13" id="PrimaryPhoneErr"></span>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="authsecondary_phone" class="form-label">Secondary Phone</label>
                                                                            <input type="text" class="form-control" name="authsecondary_phone[]" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Primary Mobile</label>
                                                                            <input type="text" class="form-control" name="authprimary_mobile[]" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <label for="inputPassword5" class="form-label">Secondary Mobile</label>
                                                                            <input type="text" class="form-control" name="authsecondary_mobile[]" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-1">
                                                                        <div class="col-md-6">
                                                                            <label for="authprimaryemail" class="form-label">Primary Email</label>
                                                                            <input type="email" class="form-control" name="authprimaryemail[]" id="auth_email" />
                                                                            <span class="text-danger font-13" id="authEmailErr"></span>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label for="authsecondryemail" class="form-label">Secondary Email</label>
                                                                            <input type="email" class="form-control" name="authsecondryemail[]" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                `;

                                                                // Append the new form section to the container
                                                                container.insertAdjacentHTML('beforeend', newFormSection);
                                                                const closeBtn = container.querySelector('.form-cards:last-child .close-btn');
                                                                closeBtn.addEventListener('click', function() {
                                                                    closeBtn.closest('.form-cards').remove();
              });
                                                                // Phone Number Validation (Primary Phone)
                                                                const phoneInput = container.querySelector('#authPrimary_phone');
                                                                const phoneErr = container.querySelector('#PrimaryPhoneErr');
                                                                phoneInput.addEventListener('input', function() {
                  const phoneValue = phoneInput.value;
                                                                const phonePattern = /^[0-9]{10}$/;
                                                                if (!phonePattern.test(phoneValue)) {
                                                                    phoneErr.textContent = 'Invalid phone number. Please enter a 10-digit number.';
                  } else {
                                                                    phoneErr.textContent = '';
                  }
              });

                                                                // Email Validation
                                                                const emailInput = container.querySelector('#auth_email');
                                                                const emailErr = container.querySelector('#authEmailErr');
                                                                emailInput.addEventListener('input', function() {
                  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 6}$/;
                                                                if (!emailPattern.test(emailInput.value)) {
                                                                    emailErr.textContent = 'Please enter a valid email address.';
                  } else {
                                                                    emailErr.textContent = '';
                  }
              });
          });

                                                                const primaryPhoneInput = document.getElementById('authprimary_phone');
                                                                const secondaryPhoneInput = document.getElementById('authsecondary_phone');
                                                                const authprimaryMobile = document.getElementById('authprimary_mobile');
                                                                const authsecondaryMobile = document.getElementById('authsecondary_mobile');
                                                                const cliInput = document.getElementById("cli");
                                                                const authprimaryemail = document.getElementById("authprimaryemail");
                                                                const authsecondryemail = document.getElementById("authsecondryemail");
                                                                const businesswebsite = document.getElementById("businesswebsite");
                                                                const submitBtn = document.getElementById('submitBtn');

                                                                const primaryPhoneErr = document.getElementById('businessPhoneErr');
                                                                const secondaryPhoneErr = document.getElementById('secondaryPhoneErr');
                                                                const primaryMobileErr = document.getElementById('primaryMobileErr');
                                                                const secondaryMobileErr = document.getElementById('secondaryMobileErr');
                                                                const cliErr = document.getElementById("cliErr");
                                                                const businessEmailErr = document.getElementById("businessEmailErr");
                                                                const secondaryEmailErr = document.getElementById("secondaryEmailErr");
                                                                const businessWebsiteErr = document.getElementById("businessWebsiteErr");

                                                                // Validation Function for Phone
                                                                function validatePhone(input, errorElement, startsWith) {
              const value = input.value.trim();
                                                                if (!value) {
                                                                    errorElement.textContent = ''; // Clear error if empty
                                                                return false;
              }
                                                                if (!new RegExp(`^[${startsWith}]`).test(value) || value.length < 9 || value.length > 10) {
                                                                    errorElement.textContent = `Phone must start with ${startsWith} and be 9-10 digits long.`;
                                                                return false;
              }
                                                                errorElement.textContent = ''; // Clear error if valid
                                                                return true;
          }

                                                                // Validation Function for Email
                                                                function validateEmail(input, errorElement) {
              const value = input.value.trim();
                                                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
                                                                if (!value) {
                                                                    errorElement.textContent = ''; // Clear error if empty
                                                                return false;
              }
                                                                if (!emailRegex.test(value)) {
                                                                    errorElement.textContent = 'Invalid email format.';
                                                                return false;
              }
                                                                errorElement.textContent = ''; // Clear error if valid
                                                                return true;
          }

                                                                // Validation Function for Website
                                                                function validateWebsite(input, errorElement) {
              const value = input.value.trim();
                                                                const websiteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
                                                                if (!value) {
                                                                    errorElement.textContent = '';
                                                                return false;
              }
                                                                if (!websiteRegex.test(value)) {
                                                                    errorElement.textContent = 'Invalid website url.';
                                                                return false;
              }
                                                                errorElement.textContent = '';
                                                                return true;
          }

                                                                // Button Enable/Disable Logic
                                                                function toggleSubmitButton() {
              const isPrimaryPhoneValid = validatePhone(primaryPhoneInput, primaryPhoneErr, '1-3');
                                                                const isSecondaryPhoneValid = validatePhone(secondaryPhoneInput, secondaryPhoneErr, '1-3');
                                                                const isCliValid = validatePhone(cliInput, cliErr, '1-3');
                                                                const isPrimaryMobileValid = validatePhone(authprimaryMobile, primaryMobileErr, '7');
                                                                const isSecondaryMobileValid = validatePhone(authsecondaryMobile, secondaryMobileErr, '7');
                                                                const isEmailValid = validateEmail(authprimaryemail, businessEmailErr);
                                                                const isSecondaryEmailValid = validateEmail(authsecondryemail, secondaryEmailErr);
                                                                const isWebsiteValid = validateWebsite(businesswebsite, businessWebsiteErr);
                                                                const isFormValid = isPrimaryPhoneValid && isCliValid && isEmailValid;

                                                                // Enable/Disable button and apply styles
                                                                if (isFormValid) {
                                                                    submitBtn.disabled = false;
                                                                submitBtn.style.backgroundColor = '';
                                                                submitBtn.style.cursor = 'pointer';
              } else {
                                                                    submitBtn.disabled = true;
                                                                submitBtn.style.backgroundColor = 'grey';
                                                                submitBtn.style.cursor = 'not-allowed';
              }
          }

          // Event Listeners
          primaryPhoneInput.addEventListener('input', () => {
                                                                    validatePhone(primaryPhoneInput, primaryPhoneErr, '1-3');
                                                                toggleSubmitButton();
          });
  
          secondaryPhoneInput.addEventListener('input', () => {
                                                                    validatePhone(secondaryPhoneInput, secondaryPhoneErr, '1-3');
                                                                toggleSubmitButton();
          });
  
          cliInput.addEventListener('input', () => {
                                                                    validatePhone(cliInput, cliErr, '1-3');
                                                                toggleSubmitButton();
          });
  
          authprimaryMobile.addEventListener('input', () => {
                                                                    validatePhone(authprimaryMobile, primaryMobileErr, '7');
                                                                toggleSubmitButton();
          });
  
          authsecondaryMobile.addEventListener('input', () => {
                                                                    validatePhone(authsecondaryMobile, secondaryMobileErr, '7');
                                                                toggleSubmitButton();
          });
  
          authprimaryemail.addEventListener('input', () => {
                                                                    validateEmail(authprimaryemail, businessEmailErr);
                                                                toggleSubmitButton();
          });
  
          authsecondryemail.addEventListener('input', () => {
                                                                    validateEmail(authsecondryemail, secondaryEmailErr)
              toggleSubmitButton();
          })
  
          businesswebsite.addEventListener('input', () => {
                                                                    validateWebsite(businesswebsite, businessWebsiteErr);
                                                                toggleSubmitButton();
          })

                                                                // Initial Check
                                                                toggleSubmitButton();
                                                            </script>


                                                            <script>
          document.addEventListener('DOMContentLoaded', () => {
              const addMainBtn = document.getElementById('add-main-btn');
                                                                const formContainer = document.getElementById('form-container');
                                                                const VAT_RATE = 0.20;
                                                                let cliCounter = 1;

                                                                // Function to attach dynamic behavior to fields
                                                                function attachFieldLogic(container) {
                                                                    container.querySelectorAll('input[name="plan_cost[]"]').forEach(input => {
                                                                        input.addEventListener('input', (e) => {
                                                                            const cost = parseFloat(e.target.value) || 0;
                                                                            const vatField = container.querySelector(`input[name="vat[]"]`);
                                                                            const inclVatField = container.querySelector(`input[name="including_vat[]"]`);

                                                                            const vat = cost * VAT_RATE;
                                                                            const inclVat = cost + vat;

                                                                            vatField.value = vat.toFixed(2); // Format to 2 decimal places
                                                                            inclVatField.value = inclVat.toFixed(2);
                                                                        });
                                                                    });

                  // Update VAT and Including VAT for calling features when Cost changes
                  container.querySelectorAll('input[name="callingFeaturesCost[]"]').forEach(input => {
                                                                    input.addEventListener('input', (e) => {
                                                                        const cost = parseFloat(e.target.value) || 0;
                                                                        const vatField = container.querySelector(`input[name="callingFeaturesVAT[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="callingFeaturesIncludingVAT[]"]`);

                                                                        const vat = cost * VAT_RATE;
                                                                        const inclVat = cost + vat;

                                                                        vatField.value = vat.toFixed(2); // Format to 2 decimal places
                                                                        inclVatField.value = inclVat.toFixed(2);
                                                                    });
                  });
  
                  container.querySelectorAll('input[name="addonscost[]"]').forEach(input => {
                                                                    input.addEventListener('input', (e) => {
                                                                        const cost = parseFloat(e.target.value) || 0;
                                                                        const vatField = container.querySelector(`input[name="addonsvat[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="addonsincludingvat[]"]`);

                                                                        const vat = cost * VAT_RATE;
                                                                        const inclVat = cost + vat;

                                                                        vatField.value = vat.toFixed(2); // Format to 2 decimal places
                                                                        inclVatField.value = inclVat.toFixed(2);
                                                                    });
                  });
  
                  container.querySelectorAll('input[name="productservicecost[]"]').forEach(input => {
                                                                    input.addEventListener('input', (e) => {
                                                                        const cost = parseFloat(e.target.value) || 0;
                                                                        const vatField = container.querySelector(`input[name="productservicevat[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="productserviceincludingvat[]"]`);

                                                                        const vat = cost * VAT_RATE;
                                                                        const inclVat = cost + vat;

                                                                        vatField.value = vat.toFixed(2); // Format to 2 decimal places
                                                                        inclVatField.value = inclVat.toFixed(2);
                                                                    });
                  });

                                                                const packageSelect = container.querySelectorAll('select[name="plan_name[]"]');
                  packageSelect.forEach(select => {
                                                                    select.addEventListener('change', (e) => {
                                                                        const selectedOption = e.target.options[e.target.selectedIndex];
                                                                        const costField = container.querySelector(`input[name="plan_cost[]"]`);
                                                                        const vatField = container.querySelector(`input[name="vat[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="including_vat[]"]`);
                                                                        if (selectedOption) {
                                                                            costField.value = selectedOption.dataset.cost || '';
                                                                            vatField.value = selectedOption.dataset.vat || '';
                                                                            inclVatField.value = selectedOption.dataset.inclvat || '';
                                                                        }
                                                                    });
                  });

                                                                const callingFeatureSelect = container.querySelectorAll('select[name="callingFeatures[]"]');
                  callingFeatureSelect.forEach(select => {
                                                                    select.addEventListener('change', (e) => {
                                                                        const selectedOption = e.target.options[e.target.selectedIndex];
                                                                        const costField = container.querySelector(`input[name="callingFeaturesCost[]"]`);
                                                                        const vatField = container.querySelector(`input[name="callingFeaturesVAT[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="callingFeaturesIncludingVAT[]"]`);
                                                                        if (selectedOption) {
                                                                            costField.value = selectedOption.dataset.cost || '';
                                                                            vatField.value = selectedOption.dataset.vat || '';
                                                                            inclVatField.value = selectedOption.dataset.inclvat || '';
                                                                        }
                                                                    });
                  });

                                                                const addOnsSelect = container.querySelectorAll('select[name="add_ons[]"]');
                  addOnsSelect.forEach(select => {
                                                                    select.addEventListener('change', (e) => {
                                                                        const selectedOption = e.target.options[e.target.selectedIndex];
                                                                        const costField = container.querySelector(`input[name="addonscost[]"]`);
                                                                        const vatField = container.querySelector(`input[name="addonsvat[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="addonsincludingvat[]"]`);
                                                                        if (selectedOption) {
                                                                            costField.value = selectedOption.dataset.cost || '';
                                                                            vatField.value = selectedOption.dataset.vat || '';
                                                                            inclVatField.value = selectedOption.dataset.inclvat || '';
                                                                        }
                                                                    });
                  });

                                                                const productSelect = container.querySelectorAll('select[name="product_services[]"]');
                  productSelect.forEach(select => {
                                                                    select.addEventListener('change', (e) => {
                                                                        const selectedOption = e.target.options[e.target.selectedIndex];
                                                                        const costField = container.querySelector(`input[name="productservicecost[]"]`);
                                                                        const vatField = container.querySelector(`input[name="productservicevat[]"]`);
                                                                        const inclVatField = container.querySelector(`input[name="productserviceincludingvat[]"]`);
                                                                        if (selectedOption) {
                                                                            costField.value = selectedOption.dataset.cost || '';
                                                                            vatField.value = selectedOption.dataset.vat || '';
                                                                            inclVatField.value = selectedOption.dataset.inclvat || '';
                                                                        }
                                                                    });
                  });

                                                                // Reinitialize addRow for the new container
                                                                addRow('.add-more-btn1', container.querySelector('.callingFeaturesContainer'), {
                                                                    label: 'Calling Features',
                                                                name: 'callingFeatures[]',
                                                                options: `@foreach ($allcallingfeatures as $callingfeatures)
                                                                <option value="{{ $callingfeatures->callingfeature_name }}"
                                                                    data-cost="{{ $callingfeatures->cost }}"
                                                                    data-vat="{{ $callingfeatures->vat }}"
                                                                    data-inclvat="{{ $callingfeatures->incl_vat }}">
                                                                    {{ $callingfeatures-> callingfeature_name}}
                                                                </option>
                                                                @endforeach`
                  }, [{
                                                                    label: 'Cost',
                                                                name: 'callingFeaturesCost[]'
                  }, {
                                                                    label: 'VAT',
                                                                name: 'callingFeaturesVAT[]'
                  }, {
                                                                    label: 'Including VAT',
                                                                name: 'callingFeaturesIncludingVAT[]'
                  }]);

                                                                addRow('.add-more-btn2', container.querySelector('.addOnsContainer'), {
                                                                    label: 'Add Ons',
                                                                name: 'add_ons[]',
                                                                options: `  @foreach ($alladdons as $addon)
                                                                <option value="{{ $addon->addon_name }}" data-cost="{{ $addon->cost }}" data-vat="{{ $addon->vat }}" data-inclvat="{{ $addon->incl_vat }}">
                                                                    {{ $addon-> addon_name}}
                                                                </option>
                                                                @endforeach`
                  }, [{
                                                                    label: 'Cost',
                                                                name: 'addonscost[]'
                  }, {
                                                                    label: 'VAT',
                                                                name: 'addonsvat[]'
                  }, {
                                                                    label: 'Including VAT',
                                                                name: 'addonsincludingvat[]'
                  }]);

                                                                addRow('.add-more-btn3', container.querySelector('.oneOffContainer'), {
                                                                    label: 'Product Service',
                                                                name: 'product_services[]',
                                                                options: `@foreach ($allhardwares as $hardware)
                                                                <option value="{{ $hardware->hardware_name }}"
                                                                    data-cost="{{ $hardware->cost }}"
                                                                    data-vat="{{ $hardware->vat }}"
                                                                    data-inclvat="{{ $hardware->incl_vat }}">
                                                                    {{ $hardware-> hardware_name}}
                                                                </option>
                                                                @endforeach`
                  }, [{
                                                                    label: 'Cost',
                                                                name: 'productservicecost[]'
                  }, {
                                                                    label: 'VAT',
                                                                name: 'productservicevat[]'
                  }, {
                                                                    label: 'Including VAT',
                                                                name: 'productserviceincludingvat[]'
                  }]);
              }

              // Add CLI button click event
              addMainBtn.addEventListener('click', () => {
                  const originalCard = document.getElementById('offerPackageDetail');
                                                                if (originalCard) {
                      const newCard = originalCard.cloneNode(true);
                                                                newCard.id = `offerPackageDetail_${cliCounter}`;
                                                                // Reset all input and select fields
                                                                const inputs = newCard.querySelectorAll('input, select');
                      inputs.forEach(input => {
                          if (input.id) {
                                                                    input.id = `${input.id}_${cliCounter}`;
                          }
                                                                input.value = '';
                                                                if (input.selectedIndex !== undefined) {
                                                                    input.selectedIndex = 0;
                          }
                      });
                                                                const removeButton = newCard.querySelector('.remove-card-btn');
                                                                removeButton.style.display = 'inline-block';
                      removeButton.addEventListener('click', () => {
                                                                    newCard.remove();
                      });
                                                                attachFieldLogic(newCard);
                                                                formContainer.appendChild(newCard);
                                                                cliCounter++;
                  }
              });

                                                                // Attach initial logic for the default card
                                                                attachFieldLogic(document);
          });

                                                                // Updated addRow function to handle dynamic additions
                                                                function addRow(buttonSelector, container, selectOptions, inputNames) {
              const addButton = container.querySelector(buttonSelector);
                                                                if (addButton) {
                                                                    addButton.addEventListener('click', function () {
                                                                        const moreRow = document.createElement('div');
                                                                        moreRow.classList.add('row', 'mt-3');
                                                                        moreRow.innerHTML = `
                  <div class="col-md-6">
                      <label class="form-label">${selectOptions.label}</label>
                      <select class="form-select" name="${selectOptions.name}">
                          <option selected disabled>Select</option>
                          ${selectOptions.options}
                      </select>
                  </div>
                  ${inputNames.map((name) => `
                      <div class="col-md-2">
                          <label class="form-label">${name.label}</label>
                          <input type="text" class="form-control" name="${name.name}" />
                      </div>
                  `).join('')}
                  <div class="col-md-2 mt-2">
                      <button type="button" class="btn btn-danger remove-btn">X</button>
                  </div>
              `;

                                                                        container.insertBefore(moreRow, addButton);
                                                                        moreRow.querySelector('.remove-btn').addEventListener('click', function () {
                                                                            moreRow.remove();
                                                                        });
                                                                        // Attach change event to update costs dynamically
                                                                        const selectElement = moreRow.querySelector('select');
                                                                        selectElement.addEventListener('change', function () {
                                                                            const selectedOption = selectElement.options[selectElement.selectedIndex];
                                                                            const cost = selectedOption.getAttribute('data-cost');
                                                                            const vat = selectedOption.getAttribute('data-vat');
                                                                            const inclVat = selectedOption.getAttribute('data-inclvat');
                                                                            const inputs = moreRow.querySelectorAll('input');
                                                                            inputs[0].value = cost || '';
                                                                            inputs[1].value = vat || '';
                                                                            inputs[2].value = inclVat || '';
                                                                        });
                                                                        const firstOption = selectElement.querySelector('option[selected]');
                                                                        if (firstOption) {
                                                                            const cost = firstOption.getAttribute('data-cost');
                                                                            const vat = firstOption.getAttribute('data-vat');
                                                                            const inclVat = firstOption.getAttribute('data-inclvat');
                                                                            const inputs = moreRow.querySelectorAll('input');
                                                                            inputs[0].value = cost || '';
                                                                            inputs[1].value = vat || '';
                                                                            inputs[2].value = inclVat || '';
                                                                        }
                                                                    });
              }
          }
                                                            </script>
                                                            <script>
          // Get the package dropdown and other display elements
                                                                const packageDropdown = document.getElementById('packageOffered');
                                                                const packageNameElement = document.getElementById('packageName');
                                                                const phoneLineElement = document.getElementById('phoneLine');
                                                                const phoneLineCont = document.getElementById("phoneLineCont");
                                                                const uploadSpeedElement = document.getElementById('uploadSpeed');
                                                                const downloadSpeedElement = document.getElementById('downloadSpeed');
                                                                const oneOffContainer = document.getElementById("oneOffContainer");

                                                                // Listen for changes on the dropdown
                                                                packageDropdown.addEventListener('change', function () {
              
              if(packageDropdown.value === "Basic Line rental - Sparta / Live Line Only"){

                                                                    oneOffContainer.style.display = "none"
                                                                }else{
                                                                    oneOffContainer.style.display = "block"
                                                                }

              // Get the selected option
                                                                const selectedOption = packageDropdown.options[packageDropdown.selectedIndex];

                                                                if (selectedOption) {
                  // Extract the data attributes from the selected option
                  const packageName = selectedOption.dataset.package;
                                                                const phoneLine = selectedOption.dataset.phone;
                                                                const uploadSpeed = selectedOption.dataset.uploadspeed;
                                                                const downloadSpeed = selectedOption.dataset.downloadspeed;

                                                                // Update the DOM elements with the selected package details
                                                                packageNameElement.textContent = packageName || 'Not Available';
                                                                uploadSpeedElement.textContent = uploadSpeed || '0 Mbps';
                                                                downloadSpeedElement.textContent = downloadSpeed || '0 Mbps';
                                                                if(phoneLine == 1){
                                                                    phoneLineCont.style.display = "block"
                      phoneLineElement.textContent = phoneLine ? `Phone Line` : 'Phone Line: Not Available';
                  }
                                                                else{
                                                                    phoneLineCont.style.display = "none"
                                                                }
                  
              }
          });

                                                            </script>
                                                        </body>

                                                    </html>
                                                    @else
  @php return redirect('/')->send(); @endphp
                                                    @endif


                                                    <div class="payment-summery-body" style="background-color: white; padding: 15px; border-radius: 15px;">
                                                        <div style="display: flex; justify-content: space-around; font-size: 22px;">
                                                            <h4 style="width: 33.3%; padding-left: 80px; padding-top: 10px;">Service</h4>
                                                            <h4 style="width: 33.3%; text-align: right; padding-right: 30px; padding-top: 10px;">One-Off</h4>
                                                            <h4 style="width: 33.3%; text-align: right; padding-right: 75px; padding-top: 10px;">Monthly</h4>
                                                        </div>
                                                        <hr style="margin: 10px;" />

                                                        <div style="display: flex; justify-content: space-around; padding: 0px 25px;">
                                                            <div style="display: flex; flex-direction: column; text-align: left; font-size: 20px; line-height: 1.8;">
                                                                <span>Connectivity</span>
                                                                <span>Add-Ons</span>
                                                                <span>Calling Features</span>
                                                                <span>Router & Delivery Charges</span>
                                                            </div>
                                                            <div style="display: flex; flex-direction: column; text-align: right; font-size: 20px; line-height: 1.8;">
                                                                <span>-</span>
                                                                <span id="addOnVat">-</span>
                                                                <span id="callingVat">-</span>
                                                                <span id="routerV">Router & Delivery Charges</span>
                                                            </div>
                                                            <div style="display: flex; flex-direction: column; text-align: right; font-size: 20px; line-height: 1.8; width: 20%;">
                                                                <span id="totalCost">£XXX</span>
                                                                <span id="addOnsPrice">£XXX</span>
                                                                <span id="callingPrice">£XXX</span>
                                                                <span id="routerPrice">£XXX</span>
                                                            </div>
                                                        </div>
                                                        <hr style="margin: 10px;" />
                                                        <div style="display: flex; justify-content: space-around;">
                                                            <div style="display: flex; flex-direction: column; padding-top: 10px; padding-left: 75px; width: 33.3%;">
                                                                <h4 style="font-size: 30px;">Total</h4>
                                                            </div>
                                                            <div style="display: flex; flex-direction: column; text-align: right; padding-right: 30px; width: 33.3%;">
                                                                <h4 id="total" style="font-size: 30px;">£10.00</h4>
                                                                <div style="line-height: 0; text-align: right;">
                                                                    <h4 style="font-size: 30px;">£10.00</h4>
                                                                    <span style="font-size: 12px; font-weight: bold;">Inc VAT</span>
                                                                </div>
                                                            </div>
                                                            <div style="display: flex; flex-direction: column; text-align: right; padding-right: 75px; width: 33.3%;">
                                                                <h4 style="font-size: 30px;" id="totalAll">£XXXX</h4>
                                                                <div style="line-height: 0; text-align: right;">
                                                                    <h4 style="font-size: 30px;" id="pVat">£XX</h4>
                                                                    <span style="font-size: 12px; font-weight: bold;">Inc VAT</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  