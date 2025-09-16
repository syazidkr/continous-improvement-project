import Calendar from "@/components/Calendar"

const Test = () => {
  return (
    <div className="flex p-4">
      <div className="w-1/2">
        Statistic
      </div>
      <div className="w-1/2">
        <Calendar/>
      </div>
    </div>
  )
}

export default Test