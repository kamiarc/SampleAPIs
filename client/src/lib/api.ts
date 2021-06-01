const API_URL = "http://localhost:5555";

export const getAllProjects = async () => {
  try {
    const resp = await fetch(`${API_URL}/frontend`);
    const { data } = await resp.json();
    return data.APIList;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getSingleProject = async (slug: string) => {
  console.log({ slug });
  try {
    const resp = await fetch(`${API_URL}/frontend/${slug}`);
    const { data } = await resp.json();
    console.log({ data });
    return data.APIList;
  } catch (e) {
    console.log(e);
    return {};
  }
};
