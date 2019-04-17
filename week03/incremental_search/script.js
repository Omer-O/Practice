(function(countries) {
    var input = $("input");
    var results = $("#results");

    input.on("input", function() {
        var val = input.val();
        var matches = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                matches.push(countries[i]);
                if (matches.length == 4) {
                    break;
                }
            }
        }
        if (matches && matches.length) {
            var resultsHtml = "";
            for (var j = 0; j < matches.length; j++) {
                resultsHtml += '<div class="results">' + matches[j] + "</div>";
            }
        } else {
            resultsHtml = '<div class="results">no results</div>';
        }
        results.html(resultsHtml).show();
    });

    results.on("mouseover", function(e) {
        $(e.target).addClass("highlight");
        $(e.target)
            .next()
            .removeClass("highlight");
        $(e.target)
            .prev()
            .removeClass("highlight");
    });

    results.on("mouseleave", function(e) {
        results.removeClass("highlight");
        results.html("").hide();
    });

    results.on("mousedown", function(e) {
        input.val($(e.target).html());
        results.html("").hide();
    });

    input.on("keydown", function(e) {
        if (e.keyCode == 40) {
            console.log("down");
            if (results.find(".highlight").length == 0) {
                if ($(".results").length > 0) {
                    $(".results")
                        .eq(0)
                        .addClass("highlight");
                }
            } else if (results.find(".highlight").length == 1) {
                // console.log("length: ", $(".results").length);
                var highlightPosition = $(".results.highlight").index();
                console.log(
                    "highlight element found on position: ",
                    highlightPosition
                );
                if (highlightPosition < $(".results").length - 1) {
                    $(".results")
                        .eq(highlightPosition + 1)
                        .addClass("highlight");
                    $(".results")
                        .eq(highlightPosition)
                        .removeClass("highlight");
                } else {
                    console.log("last element, do nothing");
                }
            }
        } else if (e.keyCode == 38) {
            console.log("up");
            var highlightPosition = $(".results.highlight").index();
            if (results.find(".highlight").length == 0) {
                if ($(".results").length > 0) {
                    $(".results")
                        .eq($(".results").length - 1)
                        .addClass("highlight");
                }
            } else if (results.find(".highlight").length == 1) {
                console.log("position: ", highlightPosition);
                if (highlightPosition != 0) {
                    console.log("not first");
                    $(".results")
                        .eq(highlightPosition - 1)
                        .addClass("highlight");
                    $(".results")
                        .eq(highlightPosition)
                        .removeClass("highlight");
                }
            }
        } else if (e.keyCode == 13) {
            console.log("enter pressed");
            input.val($(".results.highlight").html());
            results.html("").hide();
        }
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]);
