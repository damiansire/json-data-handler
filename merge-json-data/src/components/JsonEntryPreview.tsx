const JsonEntryPreview = ({ jsonEntry }: { jsonEntry: any }) => {
  return (
    <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
      <tbody>
        {Object.entries(jsonEntry).map(([key, value]) => (
          <tr key={key} className="border-b">
            <th className="py-2 px-4 text-left bg-gray-200 font-semibold text-gray-700">
              {key}:
            </th>
            <td className="py-2 px-4 text-right">
              {typeof value === "string" ? value : typeof value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsonEntryPreview;
