"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { RenewTokenUseCase } from "@/src/application/auth/RenewTokenUseCase";

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const [checking, setChecking] = useState(true); // nuevo estado de carga

  useEffect(() => {
    const checkAuthToken = async () => {
      const renewTokenUseCase = new RenewTokenUseCase();

      try {
        const data = await renewTokenUseCase.execute();
        dispatch(
          onLogin({
            id: data.id,
            token: data.token,
            profiles: data.profiles || [],
          })
        );
      } catch (error) {
        dispatch(onLogout());
      } finally {
        setChecking(false); // ya terminó de revisar
      }
    };

    checkAuthToken();
  }, [dispatch]);

  // Proteger páginas privadas
  const protectRoute = () => {
    useEffect(() => {
      if (!checking && !user.isLoggedIn) {
        router.push("/login");
      }
    }, [user, router, checking]);
  };

  // Proteger páginas de invitado (login/register)
  const protectGuest = () => {
    useEffect(() => {
      if (!checking && user.isLoggedIn) {
        router.push("/"); // redirige al home si ya está logueado
      }
    }, [user, router, checking]);
  };

  return { user, protectRoute, protectGuest, checking };
};
