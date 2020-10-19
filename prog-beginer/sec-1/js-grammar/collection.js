var classes = ['class: a', 'class: b', 'class: c', 'class: d'];
for (var grade = 1; grade < 4; grade++) {
    for (var i = 0; i < classes.length; i++) {
        document.write('<p> grade: ' + grade + ' - ' + classes[i] + '</p>');
    }

}