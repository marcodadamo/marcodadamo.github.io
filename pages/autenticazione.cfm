<cflogin>     
<cfif isDefined(‘form.username’) AND isDefined(‘form.password’)>     
<cfelse>     
</cfif>
</cflogin>

<cflogin>     
<cfif isDefined(‘form.username’) AND isDefined(‘form.password’)>     
     <cfelse>     
           <cfinclude template=”modulo_login.cfm”>    
          <cfinclude template=”OnRequestEnd.cfm”>
          <cfabort>     </cfif></cflogin>
