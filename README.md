## Example GraphQL with NodeJS

### Install
`npm init`

`npm install express --save`

`npm install graphql express-graphql --save`

`npm install lodash --save`

### Run

`npm run start`

### Result

Open in your browser `http://localhost:3000`

After write:
```
 {
  posts {
            id
            title
            author {
                  twitterHandle
            }
          }
} 
```

### Congratulation!!!