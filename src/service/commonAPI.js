import axios from "axios";

const commonAPI = async (method, url, data = null) => {
    try {
        console.log(`API Request: ${method} ${url}`, data); // Log Request

        const response = await axios({
            method,
            url,
            data,
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("✅ API Response:", response.data); // Log Response
        return response.data;
    } catch (error) {
        console.error("❌ API Error:", error.response ? error.response.data : error.message);
        return { success: false, message: "API Request Failed" };
    }
};

export default commonAPI;
