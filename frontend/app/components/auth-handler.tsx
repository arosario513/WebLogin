export const HandleRegister = async (
    username: string,
    password: string,
    setMessage: (message: string) => void
) => {
    if (username && password) {
        try {
            const res = await fetch("http://localhost:9000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            setMessage("Error");
        }
    } else {
        setMessage("Not valid");
    }
};

export const HandleLogin = async (
    username: string,
    password: string,
    setMessage: (message: string) => void
) => {
    if (username && password) {
        try {
            const res = await fetch("http://localhost:9000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            setMessage("Error");
        }
    } else {
        setMessage("Not valid");
    }
};

