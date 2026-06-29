# Angular-Deadline-App

###1 
```shell
# The first solution (manual decrement) is more lightweight and avoids repeated API calls.

# Check method checkDeadline() in deadline-app/src/app/deadline/deadline.component.ts
(https://github.com/ravizarekar007/Angular-Deadline-App/blob/main/deadline-app/src/app/deadline/deadline.component.ts)

# It uses to call api of deadline-service from deadline-app/src/app/service/deadline.service.ts
(https://github.com/ravizarekar007/Angular-Deadline-App/blob/main/deadline-app/src/app/service/deadline.service.ts)
```

 ###2 
 ```shell
# The second solution uses RxJS reactivity, is robust and it uses RxJs operators

# Check method checkDeadline1() in src/app/deadline/deadline.component.ts
(https://github.com/ravizarekar007/Angular-Deadline-App/blob/main/deadline-app/src/app/deadline/deadline.component.ts)

# It uses to call api of deadline-service from deadline-app/src/app/service/deadline.service.ts
(https://github.com/ravizarekar007/Angular-Deadline-App/blob/main/deadline-app/src/app/service/deadline.service.ts)
```


### Clone the repo

```shell
git clone https://github.com/ravizarekar007/Angular-Deadline-App.git
cd Angular-Deadline-App/deadline-app
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

### Run Development Server
```bash
ng serve
```
