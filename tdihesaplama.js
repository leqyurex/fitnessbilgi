function calculateCalories() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const activity = document.getElementById('activity').value;

    if (weight && height && age && activity) {
        // Basal Metabolic Rate (BMR) calculation using Mifflin-St Jeor Equation
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Male
        // For female, use: const bmr = 10 * weight + 6.25 * height - 5 * age - 161;

        // Daily Caloric Needs calculation
        const dailyCalories = bmr * activity;

        // Calories for weight loss
        const weightLossCalories = dailyCalories - 500;

        document.getElementById('form-status').innerHTML = `
            Günlük kalori ihtiyacınız: ${dailyCalories.toFixed(2)} kcal<br>
            Yağ yakmak için günlük kalori ihtiyacınız: ${weightLossCalories.toFixed(2)} kcal
        `;
    } else {
        document.getElementById('form-status').innerText = 'Lütfen tüm alanları doldurunuz.';
    }
}
