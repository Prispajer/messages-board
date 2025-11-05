const validateMessage = (value: string): string | null => {
    const trimmed = value.trim();
    if (!trimmed) return "Wiadomość nie może być pusta";
    if (trimmed.length < 3) return "Wiadomość musi mieć minimum 3 znaki";
    if (trimmed.length > 255) return "Wiadomość nie może przekraczać 255 znaków";

    return null;
}

export default validateMessage;
