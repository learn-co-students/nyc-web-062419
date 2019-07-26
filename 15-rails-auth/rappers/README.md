#Questions:
- When to use a SessionsController 
- What is sessions 
- flow of using session


# Sessions vs Cookies vs Flash
- special hashes 
- Used to store information because HTTP is stateless 
- Flash
   - store information for at least 1 additional request 
- Cookies 
   - information is stored indefinitely 
   - but we dont store information top level because it's not the most secure 
- Session
   - stores information indefinitely 
   - when we send cookies it contains our session hash 
   - inside of our session hash is the information we need to ID a user 

- Authentication
   - Are you who you say you are?

- Authorization 
   - Can you sit with us? 


