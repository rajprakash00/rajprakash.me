import { Center } from "@/styles/layout";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import styled from "styled-components";

export const ViewCounter = () => {
  const { pathname: path } = useRouter();
  const isDisabled = process.env.NODE_ENV === "development";
  const { data: views, isLoading } = useQuery({
    queryKey: ["page_views", path.split("/")[1]],
    queryFn: () =>
      isDisabled
        ? fetchViewsCount(path.split("/")[1])
        : handleViewCount(path.split("/")[1]),
    staleTime: Infinity,
  });

  return (
    <Center>
      {isLoading ? (
        <ViewsMark>Getting views count</ViewsMark>
      ) : (
        <>
          <ViewsMark>
            {views.data[0]?.views_count ?? views.data} views! Thanks for coming
            by 🙌
          </ViewsMark>
        </>
      )}
    </Center>
  );
};

const fetchViewsCount = async (slug: string) => {
  const result = await fetch(`/api/fetch_views?page_slug=${slug}`);

  const updatedData = result.json();
  return updatedData;
};

const handleViewCount = async (slug: string) => {
  const reqBody = { page_slug: slug };
  const result = await fetch(`/api/update_views`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  });

  const updatedData = result.json();
  return updatedData;
};

const ViewsMark = styled.mark`
  margin-top: 50px;
  font-weight: 500;
  font-style: italic;
  background: linear-gradient(
      104deg,
      rgba(130, 255, 173, 0) 0.9%,
      rgba(130, 255, 173, 1.25) 2.4%,
      rgba(130, 255, 173, 0.5) 5.8%,
      rgba(130, 255, 173, 0.1) 93%,
      rgba(130, 255, 173, 0.7) 96%,
      rgba(130, 255, 1732, 0) 98%
    ),
    linear-gradient(
      183deg,
      rgba(130, 255, 173, 0) 0%,
      rgba(130, 255, 173, 0.3) 7.9%,
      rgba(130, 255, 173, 0) 15%
    );
  padding: 0.4em 14.7px;
  border-radius: 7.5px;
  color: var(--text-color-primary);
`;
