

(function(countries) {
    var input = $('input');

    input.on('input', function(e) {
            var val = input.val();
            var matches = [];
            for (var i = 0; i < countries.length; i++) {
                if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                    matches.push(countries[i]);
                    if (matches.length == 4) {
                        console.log(matches);
                        break;
                    }
                }
            }
//'no result' massage.
            var results = $('#results');
            var resultHtml = '';
            if (matches.length == 0) {
                resultHtml += '<div class="results">no result</div>';
            }
//create a new div with the relevant match in the input.
            if (val != '') {
                for (var i = 0; i < matches.length; i++) {
                    resultHtml += '<div class="results">' + matches[i] + '</div>';
                }
            }
            results.html(resultHtml);

//heighlight the specific line in the menu
            $(".results").on('mouseover', function(evnt) {
                $('.heighlighted').removeClass('heighlighted');
                $(evnt.target).addClass('heighlighted');
            })
//pick the heighlited line and insert to the input.
            $(".results").on('mousedown', function(evnt) {
                var newString = $('.heighlighted').html();
                input.val(newString);
            })
    });

    input.on('focus',function() {
        input.trigger("input");
    });

//Keys navigation in menu
    input.on('keydown', function(e) {
        if (e.keyCode == 40) {
            $(".highlighted").last().hasClass("result");
            hLight($('.heighlighted').next());
        }
        if (e.keyCode == 38) {
            $(".highlighted").first().hasClass("result");
            hLight($('.heighlighted').prev());
        }
        if (e.keyCode == 13) {
            input.val($('.heighlighted').html());
            $('.results').hide();
        }
    });
//function for Keys navigation in menu
    function hLight(h) {
        $('.heighlighted').removeClass('heighlighted');
        $(h).addClass('heighlighted');
    }

    input.on("blur", function() {
        $('.results').hide();
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
    "Brunei", "Bulgaria",
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
    "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala",
    "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland",
    "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica",
     "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan",
     "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau",
     "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
     "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova",
     "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands",
     "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway",
     "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia",
    "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa",
    "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix",
    "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia",
    "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname",
    "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey",
    "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine",
    "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia",
    "Zimbabwe"
]);
