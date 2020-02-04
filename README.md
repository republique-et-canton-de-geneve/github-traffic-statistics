gitSync is a standalone Java application which replicates the users from an LDAP source into a
[GitLab](https://about.gitlab.com) server.

# Presentation

## Context

At État de Genève we use an Active Directory server to authenticate users, plus a home-made solution
(hereafter denoted as "the LDAP server" ) to manage authorizations.
As is done in many organizations, the LDAP server organizes users in groups such
as "IT-DEV-JAVA", "IT-DEV-PHP" or "FINANCE".
Access rights to systems and applications are granted to groups or to users.
A user is assigned to any number of groups.

Now GitLab comes into play.
The server is an on-premise instance of the GitLab community edition.
Our need is to *replicate automatically the LDAP configuration of the users onto the GitLab server*.
For example, we want the GitLab server to acquire automatically groups "IT-DEV-JAVA', 'IT-DEV-PHP', etc.,
from the LDAP server, as well as the members of every group.
We also want the GitLab group members to acquire the adequate right permissions.

