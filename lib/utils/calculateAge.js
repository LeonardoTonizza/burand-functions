function calculateYearDifference(date1, date2) {
    return date1.getFullYear() - date2.getFullYear();
}
function isBirthdayNotReachedThisYear(today, birthDate) {
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    return monthDifference < 0 || (monthDifference === 0 && dayDifference < 0);
}
/**
 * Calcula a idade a partir da data de nascimento.
 *
 * @param birthDate - Data de nascimento.
 * @returns Idade em anos.
 */
export function calculateAge(birthDate) {
    const today = new Date();
    let age = calculateYearDifference(today, birthDate);
    if (isBirthdayNotReachedThisYear(today, birthDate)) {
        age -= 1;
    }
    return age;
}
