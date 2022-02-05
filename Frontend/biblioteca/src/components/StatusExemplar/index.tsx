import { Button } from "@chakra-ui/react";
import React from "react";
import {
  IoIosCloseCircleOutline,
  IoIosDoneAll,
  IoIosSend,
  IoIosFingerPrint,
} from "react-icons/io";

const StatusExemplar = ({ value }) => {
  const status = {
    DISPONIVEL: {
      color: "#c59b30",
      icon: IoIosFingerPrint,
      message: "Disponivel",
    },
    INDISPONIVEL: {
      color: "#c53030",
      icon: IoIosCloseCircleOutline,
      message: "Indisponivel",
    },
  };

  const Icon = status[value].icon;

  return (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      color={status[value].color}
      colorScheme="gray"
      leftIcon={<Icon fontSize="16" />}
    >
      {status[value].message}
    </Button>
  );
};

export default StatusExemplar;
