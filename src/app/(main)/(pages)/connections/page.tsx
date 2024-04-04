import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/ConnectionCard";

type Props = {
  searchParams: { [key: string]: string | undefined };
};



const Connections = ({ searchParams }: Props) => {
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
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              description={connection.description}
              // connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
