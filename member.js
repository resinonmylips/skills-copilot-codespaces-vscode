function skillsMember() {
    var member = {
        name: 'John',
        skills: ['JavaScript', 'CSS', 'HTML']
    };
    console.log(member.name); // John
    console.log(member['name']); // John
    console.log(member.skills[0]); // JavaScript
    console.log(member['skills'][1]); // CSS
}
