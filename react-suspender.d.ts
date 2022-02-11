declare module "react-suspender" {
  import React from "react";

  export interface MyComponentProps {
    suspend: boolean;
  }

  declare let Suspender: React.SFC<MyComponentProps>;

  export default Suspender;
}
