"use client";

import { useMemo, useState } from "react";
import { Mail, Phone, Search, User } from "lucide-react";
import { realtorClients, totalClients } from "@/lib/realtor-data";

export default function Clients() {
  const [search, setSearch] = useState("");

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return realtorClients;
    return realtorClients.filter((c) => c.name.toLowerCase().includes(query));
  }, [search]);

  return (
    <div>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="font-display text-2xl font-semibold text-charcoal-600">My Clients</h1>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-olive-100 px-4 py-1.5 text-xs font-semibold text-olive-500">
          Total Clients : {totalClients}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3 border-b border-charcoal-600/25 py-3">
        <Search className="h-4 w-4 shrink-0 text-charcoal-600/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by client name"
          className="w-full bg-transparent text-sm text-charcoal-600 placeholder:text-charcoal-600/40 focus:outline-none"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-gold-50 p-5 sm:p-6">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">
              <th className="pb-3">Client Name</th>
              <th className="pb-3">Mobile Number</th>
              <th className="pb-3">Email Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-600/10">
            {visible.map((client) => (
              <tr key={client.id}>
                <td className="flex items-center gap-2 py-3 text-charcoal-600">
                  <User className="h-3.5 w-3.5 text-charcoal-600/40" />
                  {client.name}
                </td>
                <td className="py-3 text-charcoal-600/80">
                  <span className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-charcoal-600/40" />
                    {client.phone}
                  </span>
                </td>
                <td className="py-3 text-charcoal-600/80">
                  <span className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-charcoal-600/40" />
                    {client.email}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {visible.length === 0 && (
          <p className="py-8 text-center text-sm text-charcoal-600/70">No clients match that search.</p>
        )}
      </div>
    </div>
  );
}
