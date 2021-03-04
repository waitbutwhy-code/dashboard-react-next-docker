import React from "react";
import Link from "next/link";

export default () => (
  <div>
    <div><Link href="/rfp/list"><a>RFPs</a></Link></div>
    <div><Link href="/supplier/list"><a>Suppliers</a></Link></div>
  </div>
);
