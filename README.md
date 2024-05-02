This project was bootstrapped with [Create React App]

In the project directory, you can run:

### `npm start`

1. Install all the dependencies using "npm install"
2. I have used Material UI, React-Redux, Redux Toolkit, RTK Query in this Assignment.
3. I have Created the Redux Store in "Store" folder which includes Slice "JobsDataSlice", ApiService folder in Store contains "JobsData" in which i have used fetchBaseQuery, createApi from redux Toolkit.
4. I have created Post operation API and I am passing limit as parameter to get the limit initially.
5. The limit paramater that I am passing on initial render using useEffect hook is basically a state created in JobDataSlice in slice with it initial value as 20.
6. After that I am dispatching the jobs data that I am getting from response to getJobs reducer to update the "Jobs" state in redux store
7. I am manipulating the data using "Jobs" state from redux store.
8. I am filtering the data using jobs state in dropdown and job cards.
9. In Infinite Scrolling, I am dispatching the increaseLimitCount by getting the current limitCount value and incrementing it with 20 on every scroll and limit count state is initially a dependency when I am peforming post operation and getting a response with incremental value every time
10. THIS ASSIGNMENT IS WORKING CORRECTLY ON MOZILLA FIREFOX in my experience as I got limited time for testing and fixing but I have tried my best to meet up with the expectation.
