/**
 * Renders a schema.org JSON-LD block.
 *
 * `</script>` inside a JSON string would close the tag early, so the sequence is
 * escaped before it reaches the DOM.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
