type getStateProps = {
	getStore: any,
	getActions: any,
	setStore: any
}



const getState = (props: getStateProps) => {
	const {getStore, getActions, setStore} = props
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			login: async (email: string, password: string) => {
				const opts = {
					method: "POST",
					Headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				}

				try {
					const resp = await fetch("http://127.0.0.1:5000/login", opts)
					if (resp.status !== 200) {
						alert("There has been some error")
						return false
					}

					const data = await resp.json()
					console.log("This came from the backend", data)
					sessionStorage.setItem("token", data.access_token)
				}

				catch(error) {
					console.error("there has been an error in log in")
				}

			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			
		}
	};
};

export default getState;