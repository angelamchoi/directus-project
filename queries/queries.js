import fetchData from "../helpers/fetchData";

export const getContactUsPosts = async () => {
  const data = await fetchData(
    `
        query ContactUsPosts {
            posts {
                id
                first_name
                last_name
                email
                body
            }
        }
        `,
    {
      variables: {}
    }
  );

  return data.data.posts;
};
