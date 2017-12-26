$(document).ready(function() {
    let character = true;
    let countDefeated = 0;
    //Counter
    let obiCount = 0;
    let lukeCount = 0;
    let yodaCount = 0;
    let maulCount = 0;

    //Disable button
    let disableBtn = true;

    // When chosen character is clicked move the other characters to enimes section

    $('#darthVader').on('click', function() {
        if (character) {
            $(this).addClass('main');
            obiCount++;
            //Changes to false so Main character wont move to enemies area
            character = false;
            // adds the characters that was not clicked to enemies section
            $('#luke').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#luke p').css({ 'margin-left': '30px' });

            $('#yoda').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#yoda p').css({ 'margin-left': '30px' });

            $('#darthMaul').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#darthMaul p').css({ 'margin-left': '30px' });
            //Adjusted the css so they would appear the same as before it was clicked
            $('.starImage').css({
                'width': '100px',
                'height': '100px',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        } else if (!character && obiCount === 0) {
            //Enables attack button after defender is selected
            lukeCount++;
            yodaCount++;
            maulCount++;
            disableBtn = false;
            $('#darthVader').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            $('#darthVader p').css({ 'margin-left': '30px' });
        }
    });
    // When character 2 is clicked move the other characters to enimes section
    $('#luke').on('click', function() {
        if (character) {
            $(this).addClass('main');
            lukeCount++;
            character = false;
            $('#darthVader').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#darthVader p').css({ 'margin-left': '30px' });

            $('#yoda').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#yoda p').css({ 'margin-left': '30px' });

            $('#darthMaul').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#darthMaul p').css({ 'margin-left': '30px' });
            //Adjusted the css so they would appear the same as before it was clicked
            $('.starImage').css({
                'width': '100px',
                'height': '100px',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        } else if (!character && lukeCount === 0) {
            //Enables attack button after defender is selected
            disableBtn = false;
            obiCount++;
            yodaCount++;
            maulCount++;
            $('#luke').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            $('#luke p').css({ 'margin-left': '30px' });
        }
    });
    /*When character 3 is clicked move the
      other characters to enimes section*/
    $('#yoda').on('click', function() {
        if (character) {
            $(this).addClass('main');
            yodaCount++;
            character = false;
            $('#darthVader').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#darthVader p').css({ 'margin-left': '30px' });

            $('#luke').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#luke p').css({ 'margin-left': '30px' });

            $('#darthMaul').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#darthMaul p').css({ 'margin-left': '30px' });
            //Adjusted the css so they would appear the same as before it was clicked
            $('.starImage').css({
                'width': '100px',
                'height': '100px',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        } else if (!character && yodaCount === 0) {
            //Enables attack button after defender is selected
            disableBtn = false;
            lukeCount++;
            obiCount++;
            maulCount++;
            $('#yoda').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            //Centers Health text
            $('#yoda p').css({ 'margin-left': '30px' });
        }
    });
    /*When character 4 is clicked move the
      other characters to enimes section*/
    $('#darthMaul').on('click', function() {
        if (character) {
            $(this).addClass('main');
            maulCount++;
            character = false;
            $('#darthVader').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#darthVader p').css({ 'margin-left': '30px' });

            $('#luke').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#luke p').css({ 'margin-left': '30px' });

            $('#yoda').appendTo('.enemiesBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'red', 'margin': '5px' });
            //Centers characters Health text
            $('#yoda p').css({ 'margin-left': '30px' });
            //Adjusted the css so they would appear the same as before it was clicked
            $('.starImage').css({
                'width': '100px',
                'height': '100px',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        } else if (!character && maulCount === 0) {
            //Enables attack button after defender is selected
            disableBtn = false;
            lukeCount++;
            obiCount++;
            sidCount++;
            $('#darthMaul').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            //Centers Health text
            $('#darthMaul p').css({ 'margin-left': '30px' });
        }
    });
    // attack functionality
    $('.attackBtn').on('click', function() {
        if (!disableBtn) {
            let charName = $('.def').attr('characterName');
            //Gets main characters health atribute value
            let firstPlayerHealth = $('.main').attr('health');
            //Gets the attack attribute value from the main Character
            let firstPlayerAttack = $('.main').attr('attack');
            //Gets the defenders health attribute value 
            let defenderHealth = $('.def').attr('health');
            //Gets the defenders counter attack attribute value 
            let counterAttack = $('.def').attr('counterAttack');
            //When user presses attack it reduces the main characters healthnby the counterAttack amount 
            let firstPlayerHealthAfter = firstPlayerHealth - counterAttack;
            // When user presses attack it reduces the defender characters health by the Attack amount 
            let defenderHealthAfter = defenderHealth - firstPlayerAttack;
            //Updates main characters health attribute in the DOM
            let firstPlayerHealthDOM = $('.main').attr('health', firstPlayerHealthAfter);
            //Updates defenders health attribute in the DOM 
            let defenderHealthDOM = $('.def').attr('health', defenderHealthAfter);
            //Changes main characters health text in the DOM 
            $('.main p').html($('.main').attr("health"));
            //Changes the defenders health text in the DOM
            $('.def p').html($('.def').attr("health"));
            //Displays message 
            $('.defender').html('<p>' + 'You attacked ' + charName +
                ' for ' + firstPlayerAttack + ' damage ' +
                charName + ' attacked you back for ' +
                counterAttack + ' </p>').css({ 'font-size': '20px', 'text-align': 'center' });
            // increase defender's counter attack
            counterAttack = counterAttack * 1.3;
            // updates the defender's counter attac
            let updatedCounterAttack = $('.main').attr('counterAttack', counterAttack);
            //Doubles main Characters attack
            firstPlayerAttack = firstPlayerAttack * 2;
            //Updates the main Characters attack 
            let firstPlayerAttack1 = $('.main').attr('attack', firstPlayerAttack);
            //Prevents the attack button from being clicked after the game is over
            if (firstPlayerHealthAfter <= 0) {
                $('.defender').html('<p>' + 'You have been defeated...Game Over!!!' + ' </p>').css({ 'font-size': '20px' });
                $('.main').remove();
                this.disabled = true;

            } else if (defenderHealthAfter <= 0) {
                //Defender Darth Vader
                if ($('.def#darthVader').attr('health') <= 0) {
                    maulCount--;
                    yodaCount--;
                    lukeCount--;
                    //Remove the the defender
                    $('.def').remove();
                    $('.defender').html('<p>' + 'You have defeated ' + charName +
                        ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
                }
                //Defender Luke
                else if ($('.def#luke').attr('health') <= 0) {
                    maulCount--;
                    yodaCount--;
                    obiCount--;
                    //Remove the the defender
                    $('.def').remove();
                    $('.defender').html('<p>' + 'You have defeated ' + charName +
                        ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
                }
                //defender Yoda
                else if ($('.def#yoda').attr('health') <= 0) {
                    maulCount--;
                    lukeCount--;
                    obiCount--;
                    //Remove the the defender
                    $('.def').remove();
                    $('.defender').html('<p>' + 'You have defeated ' + charName +
                        ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
                }
                //defender Darth Maul
                else if ($('.def#darthMaul').attr('health') <= 0) {
                    lukeCount--;
                    obiCount--;
                    yodaCount--;
                    //Remove the the defender
                    $('.def').remove();
                    $('.defender').html('<p>' + 'You have defeated ' + charName +
                        ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
                }
                //Removed event listener after game is over
                if (countDefeated === 3) {
                    $('.defender').html('<p>' + 'You Win!' + '</p>').css({ 'font-size': '40px' })
                    this.disabled = true;

                }
            }
        }
    });
});