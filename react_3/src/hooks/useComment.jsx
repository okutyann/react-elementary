import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );
  return { data, error, isLoading };
};
