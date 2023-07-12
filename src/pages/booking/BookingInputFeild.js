export default function BookingInputFeild({ label, error, ...props }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.name}
        className="block text-md font-medium text-primary1"
      >
        {label}
      </label>

      <input
        {...props}
        className="w-full px-4 py-1  border  rounded-md focus:outline-none focus:ring-primary1 focus:border-primary1"
      />
      {error ? (
        <span component="div" className="text-red-700  text-xs">
          {error}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
