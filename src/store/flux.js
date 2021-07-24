const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiUrl: " http://127.0.0.1:5000",
            email: null,
            password: null,
            currentUser: null,
            error: null,
        },
        actions: {
            handleChange: e => {
                const { name, value } = e.target;
                setStore({
                    [name]: value
                })

            },
            handleLogin: async(e, history) =>{
                e.preventDefault();

                const store = getStore();
                const options = {
                    method: 'POST',
                    body: JSON.stringify({ "email": store.email, "password": store.password }),
                    headers: {
                        'content-type': 'application/json'
                    }
                }

                const resp = await fetch(store.apiUrl + "/login", options);
                const data = await resp.json();

                if (data.success) {
                    setStore({
                        currentUser: data.data,
                        email: null,
                        password: null,
                        error: null,
                    })
                    history.push("/home");
                } else {
                    setStore({
                        error: data.msg
                    });
                    
                }
                
            },logout: (history) => {
                setStore({
                  currentUser: null,
                  });
               localStorage.clear();   
                history.push("/login");
              },
        }
    }
}






export default getState;