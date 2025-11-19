import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Toaster } from "sonner";
import type { PropsWithChildren } from "react";
import { checkAuthAction } from "./auth/actions/check-auth.action";
import { CustomFullScreamLoading } from "./components/custom/CustomFullScreamLoading";

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  const { isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthAction,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5,
  });

  if (isLoading) return <CustomFullScreamLoading></CustomFullScreamLoading>;

  return children;
};

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CheckAuthProvider>
        <RouterProvider router={appRouter}></RouterProvider>
      </CheckAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
