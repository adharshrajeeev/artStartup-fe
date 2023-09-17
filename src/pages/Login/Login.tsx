import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../../utils/ConstUrls';
import userInstance from '../../utils/axios';
import { handleErrors } from '../../utils/toastify';
import { LoadingButton } from '@mui/lab';
import { navigateTo } from '../../utils/navigateTo';


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    // Handle form input changes
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            setLoading(true);
            // Send a POST request to your authentication endpoint
            const response: any = await userInstance.post(USER_LOGIN, formData);

            // Assuming successful login, you can handle the response here
            // For example, you can redirect the user to a dashboard or display a success message
            if(response.success) {
                navigateTo('/');
                console.log('Login successful', response);
            }
        } catch (error) {
            handleErrors(error,"Login");
        } finally{
            setLoading(false);
        }
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder="name@company.com"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                // ...
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                     placeholder="••••••••"
                                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                // ...
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required={true}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <LoadingButton
                                type="button"
                                loading={loading}
                                disabled={!formData.email || !formData.password}
                                onClick={(e)=>handleSubmit(e)}
                                variant='contained'
                                className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                                    !formData.email || !formData.password ? 'bg-opacity-50 cursor-not-allowed' : ''
                                }`}

                            >
                                Sign in
                            </LoadingButton>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link to={"/signup"}>
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Sign up
                                    </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;