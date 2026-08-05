import { updateInvoice } from "@/app/lib/actions";
// ...

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId}>
      {/* resto ya viene en el starter */}
    </form>
  );
}
