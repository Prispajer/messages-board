const validateMessage = (value: string): string | null => {
    if (!value.trim()) return "Wiadomość nie może być pusta";
    if (value.length < 3) return "Wiadomość musi mieć minimum 3 znaki";
    if (value.length > 255) return "Wiadomość nie może przekraczać 255 znaków";

    return null;
}

export default validateMessage;