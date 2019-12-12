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

<cflogin>     
<cfif isDefined(‘form.username’) AND isDefined(‘form.password’)>     
          <cfquery name=”getUtente” datasource=”#application.DSN#”>
               SELECT USERNAME, RUOLI
               FROM LOGIN
               WHERE USERNAME = ‘#form.username#’ AND PASSWORD = ‘#form.password#’
          </cfquery>
