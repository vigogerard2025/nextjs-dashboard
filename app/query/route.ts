import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

export async function GET() {
  try {
    const data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers
      ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Database Error" }, { status: 500 });
  }
}
