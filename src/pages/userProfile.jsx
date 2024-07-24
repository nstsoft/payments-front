import { authAPI } from "../api";
import Button from "../components/Button/Button";

const UserProfile = (props) => {
  const { userData } = props;

  const withdrawMethods = [
    {
      _id: "paypal",
      name: "paypal",
    },
    {
      _id: "stripe",
      name: "stripe",
    },
  ];

  const createAccount = () => {
    authAPI(userData.email)
      .then((data) => {
        if (data) {
          window.open(data.link.url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto flex border-x border-y p-[16px] radius-[8px] bg-[#f9f9f9] h-[100vh]">
      <div className="flex">
        <img
          src={userData.avatar}
          alt={`${userData.name}'s avatar`}
          className="w-[200px] h-[200px] radius-[50%] mr-4"
        />
        <div className="flex pt-2 pb-2">
          <div className="flex w-[350px] flex-col">
            <div className="flex">
              <p className="mr-4 font-bold">User:</p>
              <h2 className="italic">{userData.name}</h2>
            </div>
            <div className="flex">
              <p className="mr-4 font-bold">Email:</p>
              <p className="italic">{userData.email}</p>
            </div>
            <div className="flex">
              <p className="mr-4 font-bold">Balance:</p>
              <p className="italic">{userData.balance + "$"}</p>
            </div>
            <Button
              className={"mt-6 h-8 bg-blue-600 radius-[8px] text-white"}
              onClick={createAccount}
            >
              Create account
            </Button>
          </div>
          <div className="flex flex-col ml-16">
            <h3 className="font-bold">Withdraw methods:</h3>
            <p className="text-[14px] text-[gray]">Please choose one</p>
            <div className="flex m-2">
              {withdrawMethods.map((method) => (
                <div key={method._id} className="w-20 h-5">
                  <img
                    className="w-[inherit] h-[inherit] cursor-pointer"
                    src={`${import.meta.env.VITE_PUBLIC_URL}/${
                      method.name
                    }.svg`}
                    alt={`${method.name} icon`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
