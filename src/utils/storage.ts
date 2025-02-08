// storageUtils.js

// Set data with expiration
export const setWithExpiry = (key, value, ttl) => {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + ttl,  // ttl in milliseconds
    };

    localStorage.setItem(key, JSON.stringify(item));
};

// Get data and check for expiration
export const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
        return null;  // No data found
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Check if data has expired
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);  // Remove expired data
        return null;
    }

    return item.value;
};