
function getBirthDate(fireman) {
    const birthNum = fireman.birth_num;
    if (! birthNum) return  null;
    const yearSubstr = birthNum.substr(0, 2);
    const year = (parseInt(yearSubstr[0], 10) === 0) ? 2000 + parseInt(yearSubstr, 10) : 1900 + parseInt(yearSubstr, 10);
    const monthSubstr = parseInt(birthNum.substr(2, 2), 10);
    const month = monthSubstr > 12 ? monthSubstr - 50 : monthSubstr;
    const day = birthNum.substr(4, 2);

    return new Date(`${year}-${month}-${day}`).toLocaleDateString();
}
