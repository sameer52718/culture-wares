import Cookies from "js-cookie";

export const addToCart = async (formData) => {
  try {
    const res = await fetch("/api/cart/add-to-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCartItems = async (id) => {
  try {
    const res = await fetch(`/api/cart/all-cart-items?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteFromCart = async (id) => {
  try {
    const res = await fetch(`/api/cart/delete-from-cart?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};


export const updateQuantity = async (id, quantity) => {
  try {
    const res = await fetch(`/api/cart/quantity`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify({ id, quantity }),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
} 