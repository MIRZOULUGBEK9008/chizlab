const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const error = new Error("Xatolik bo'ldi, sahifani yangilab ko'ring.");
// Get data
export async function getData(route = "/materials", query) {
  try {
    const url = new URL(baseURL + route);
    if (query) {
      for (const key in query) url.searchParams.set(key, query[key]);
    }

    const req = await fetch(url.href, {
      headers: {
        "Cache-Control": "no-store",
      },
      next: {
        revalidate: 5,
      },
    });
    if (req.status === 200) {
      const res = await req.json();
      return res;
    } else {
      throw error;
    }
  } catch (e) {
    console.log(e);
    throw error;
  }
}

export async function getDataById(route, id) {
  try {
    const req = await fetch(baseURL + route + id, {
      headers: {
        "Cache-Control": "no-store",
      },
      next: {
        revalidate: 0,
      },
    });
    if (req.status === 200) {
      const res = await req.json();
      return res;
    } else {
      throw error;
    }
  } catch {
    throw error;
  }
}
