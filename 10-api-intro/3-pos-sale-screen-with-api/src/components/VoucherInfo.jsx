import dayjs from "dayjs";
import useVoucherStore from "../stores/useVoucherStore";

const VoucherInfo = () => {
  const { information } = useVoucherStore();

  return (
    <div className="flex flex-col items-end p-5">
      <input
        type="text"
        className="text-end font-mono text-sm"
        value={information.voucherId}
        readOnly
      />
      <input
        type="text"
        className="text-end font-mono text-sm"
        value={information.date}
        readOnly
      />
      <input
        type="text"
        className="text-end font-mono text-sm"
        value={information.time}
        readOnly
      />
    </div>
  );
};

export default VoucherInfo;
