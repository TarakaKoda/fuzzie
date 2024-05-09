import { Skeleton } from "@/components/ui/skeleton";

const ConnectionLoading = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="grid lg:grid-cols-2 p-6 gap-6 text-muted-foreground">
          <p className="lg:col-span-2">
            Connect all your apps directly from here. You may need to connect
            these apps regularly to refresh verification
          </p>
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
        </section>
      </div>
    </div>
  );
};

export default ConnectionLoading;
