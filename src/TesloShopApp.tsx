import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <RouterProvider router={appRouter}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
